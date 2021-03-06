import React from "react";
import { Card, Row, Col, List, Icon, Spin } from "antd";
import moment from "moment";
import Chart from "../../components/charts";
import MetricsConfig from "../config/metrics";
import { LocaleReceiverHoc } from "../../utils/hoc";
import CardExtra from './CardExtra';
import "./index.less";

const { Rect4 } = Chart;

export interface ModelDetailProps {
  /** 组件行行内样式 */
  item: any;
  jobId: string;
  intl?: any;
  getView?: (blockId: string) => void;
  getForecast?: (moduleId: string) => void;
  openModelDetail?: (modelId: string, modelName: string, jobId: string) => void;
}

class ModelDetail extends React.Component<ModelDetailProps, any> {
  constructor(props: ModelDetailProps) {
    super(props);
    this.state = {};
  }

  durtion = (startTime, endTime) => {
    return moment(endTime).diff(moment(startTime), "seconds");
  }

  getname = val => {
    const result = MetricsConfig.filter(i => i.value === val);
    if (result.length > 0) {
      return result[0].name;
    }
    return "";
  }

  view = blockId => {
    this.props.getView && this.props.getView(blockId);
  }

  forecast = moduleId => {
    this.props.getForecast && this.props.getForecast(moduleId);
  }

  openModelDetail = () => {
    const {
      item: { name, modelId },
      jobId,
    } = this.props;
    this.props.openModelDetail &&
      this.props.openModelDetail(modelId, name, jobId);
  }

  render() {
    const {
      item: {
        featureImportance,
        params,
        metricList,
        name,
        blockId,
        modelId,
        jobStatus,
        trainStatus,
        trainBeginTime,
        trainEndTime,
      },
      intl = {},
    } = this.props;
    const getShowCard = wrapComponent => (
      <div className={"mdlItem"} id={modelId}>
        <Card
          title={name}
          extra={
            <CardExtra
              modelId={modelId}
              id={blockId}
              view={this.view}
              forecast={this.forecast}
              openModelDetail={this.openModelDetail}
            />
          }
          bordered={false}
          // style={{ width: 300 }}
        >
          <Row
            className={"mdlItemStatusRow"}
            type="flex"
            align="middle"
            justify="center"
          >
            {wrapComponent}
          </Row>
        </Card>
      </div>
    );
    switch (true) {
      case (jobStatus === "FAIL" && trainStatus !== "SUCCESS") ||
        trainStatus === "FAIL":
        return getShowCard(
          <div>
            <Icon type="close-circle" style={{ fontSize: 14, color: "red" }} />
            trainfail
          </div>,
        );
      case trainStatus === "CREATE":
        return getShowCard(
          <div>
            <Spin tip={intl.waiting || "等待中"} />
          </div>,
        );
      case trainStatus === "TRAINING" &&
        !featureImportance &&
        !params &&
        !metricList:
        return getShowCard(
          <div>
            <Spin tip={intl.training || "训练中"} />
          </div>,
        );

      default: {
        const paramsData = params
          ? Object.keys(params).map(p => ({
              name: p,
              value: params[p],
            }))
          : [];
        return (
          <div className={"mdlItem"} id={modelId}>
            <Card
              title={
                trainStatus === "SUCCESS" ? (
                  <span>
                    <span style={{ marginRight: 8 }}>{name}</span>
                    <span
                      style={{
                        marginRight: 8,
                        fontSize: 14,
                        color: "rgba(16, 38, 58, 0.45)",
                      }}
                    >
                      {intl.trainTime || "训练时间"}
                    </span>
                    <span
                      style={{ fontSize: 14, color: "rgba(16, 38, 58, 0.45)" }}
                    >
                      {this.durtion(trainBeginTime, trainEndTime)}s
                    </span>
                  </span>
                ) : (
                  name
                )
              }
              extra={
                <CardExtra
                  modelId={modelId}
                  id={blockId}
                  view={this.view}
                  forecast={this.forecast}
                  openModelDetail={this.openModelDetail}
                />
              }
              bordered={false}
              // style={{ width: 300 }}
            >
              <Row className={"mdlItemRow"}>
                <Col span={8} className={"mdlItemCol"}>
                  <div className={"mdlItemColName"}>{intl.param || "参数"}</div>
                  {paramsData && (
                    <List
                      dataSource={paramsData}
                      renderItem={d => (
                        <List.Item>
                          <List.Item.Meta title={d.name} />
                          {d.value}
                        </List.Item>
                      )}
                      className={"mdlItemColList"}
                    />
                  )}
                </Col>
                <Col span={8} className={"mdlItemCol"}>
                  <div className={"mdlItemColName"}>featurebl</div>
                  <div>
                    {featureImportance && (
                      <Rect4 height={190} data={featureImportance} />
                    )}
                  </div>
                </Col>
                <Col span={8} className={"mdlItemColEnd"}>
                  <div className={"mdlItemColName"}>pfzb</div>
                  {metricList && (
                    <List
                      dataSource={metricList}
                      renderItem={(d: any) => (
                        <List.Item>
                          <List.Item.Meta title={this.getname(d.name)} />
                          {d.score}
                        </List.Item>
                      )}
                      className={"mdlItemColList"}
                    />
                  )}
                </Col>
              </Row>
            </Card>
          </div>
        );
      }
    }
  }
}

export default LocaleReceiverHoc("AutoML")(ModelDetail);
