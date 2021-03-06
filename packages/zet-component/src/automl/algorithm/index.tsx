import * as React from 'react';
import { ValueItemSchema, DataItemSchema } from './interface';
import { Layout, Slider } from 'antd';
import Item from './item';
import List from './list';
import './index.less';

const { Sider, Content } = Layout;

function handleData(props) {
  const {data, value} = props;
  data.forEach((fh) => {
    fh.checked = value.some((sm) => sm.id === fh.id);
  });
  return data;
}

export interface AlgorithmProps {
  /** 算法配置列表 */
  data: any[];
  /** 算法组件value */
  value?: ValueItemSchema[];
  /** 当前内容是否禁用 */
  disabled: boolean;
  /** 数据内容发生变化回调 */
  onChange?: (value: ValueItemSchema[]) => void;
}

export interface AlgorithmState {
  /** 算法配置列表 */
  singleData?: DataItemSchema;
  /** 算法组件value */
  singleValue?: ValueItemSchema;
  /** 整个算法value 的值 */
  value?: ValueItemSchema[];
  /** data 值 */
  data?: any[];

  isDisable?: boolean;
}

class Algorithm extends React.Component<AlgorithmProps, AlgorithmState> {
  /** 算法右侧内容 */
  static Item: typeof Item;
  /** 算法左侧列表 */
  static List: typeof List;

  static defaultProps = {
    value: [],
    disable: false,
  };

  constructor(props: AlgorithmProps) {
    super(props);

    const defaultSingleData = props.data.length > 0 && props.data[0];
    const defaultSingleValue = this.getSingleValue(defaultSingleData, props.value);
    this.state = {
      singleData: defaultSingleData,  // 单个算法数据项
      singleValue: defaultSingleValue,
      value: props.value,
      data: handleData(props),
      isDisable: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      // console.log('nextProps', nextProps)
      this.setState({
        data: handleData(nextProps),
      });
    }

    if (JSON.stringify(this.props.value) !== JSON.stringify(nextProps.value)) {
      this.setState({
        isDisable: false,
      }, () => {
        this.setState({
          data: handleData(nextProps),
          value: nextProps.value,
          singleValue: this.getSingleValue(this.state.singleData, nextProps.value),
          isDisable: true,
        });
      });
    }
  }

  getSingleValue = (data, value) => {
    const singleValue = (value && value.find((fd) => fd.id === data.id)) || { id: data.id, name: data.name, params: {}};
    return singleValue;
  }

  onListChange = (data) => {
    // console.log('data', data);
    const { value } = this.state;
    const singleValue = this.getSingleValue(data, value);
    this.setState({
      singleData: data,
      singleValue,
    });
  }

  onSwitchChange = (checked, data) => {
    // console.log('checkout, data', checked, data)
    const {value} = this.state;
    const { onChange } = this.props;
    let newValue = value;
    data.checked = checked;
    if (checked) {
      newValue.push({id: data.id, name: data.name, params: {}});
    } else {
      newValue = newValue.filter((ft) => ft.id !== data.id);
    }
    this.setState({
      isDisable: false,
    }, () => {
      this.setState({
        singleData: data,
        singleValue: {id: data.id, name: data.name, params: {}},
        value: newValue,
        isDisable: true,
      });
      onChange(newValue);
    });
  }

  onItemChange = (data) => {
    const {value} = this.state;
    const {onChange} = this.props;
    value.forEach((fh) => {
      if (data.id === fh.id) {
        fh.params = data.params;
      }
    });
    onChange([...value]);
  }

  public render() {
    const {disabled} = this.props;
    const {singleData, singleValue, isDisable, data, value} = this.state;
    return (
      <Layout className={'alg-layout'}>
        <Sider theme='light' width={240}>
          {
            data && <List
              disabled={disabled}
              data={data}
              value={value}
              onChange={this.onListChange}
              onSwitchChange={this.onSwitchChange}
            />
          }
        </Sider>
        <Content
          className={'alg-content'}
        >
          {
            isDisable && singleData && <Item
              disabled={disabled || !singleData.checked}
              value={singleValue}
              data={singleData}
              onChange={this.onItemChange}
            />
          }
        </Content>
      </Layout>
    );
  }
}

export default Algorithm;
