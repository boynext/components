import React, { Component } from "react";
// import Components from "@lib";
import Components from "@src";
// import pop from "@src/tools/pop";
// import { Warn } from '@lib/components/Message'
// import pop from "wowjoy-component/lib/tools/pop";
import { Btn_1, Btn_2, Btn_3 } from "@src";
const PROPS = {
  header: 123,
  // btns: [<span>1</span> , <span>2</span>]
  btnEle: [Btn_2,Btn_2],
  btnText: ["xx", "bb"]
};

class Detail extends Component {
  componentDidMount() {
    // const ComponentItem = Components[this.name];
    // const popNode = pop(Warn, {content:'asd', onClose:()=>{alert('close')}})({
    //   animeShow:'slideRightIn',
    //   autoClose: 2000,
    //   animeHide:'slideRightOut',
    //   layer:true
    // })
  }

  render() {
    const { match } = this.props;
    const name = match.params.name.replace(
      /^(.)(.*)$/,
      (match, $1, $2) => $1.toUpperCase() + $2
    );
    this.name = name;
    const ComponentItem = Components[name];
    if (ComponentItem) {
      return <ComponentItem {...PROPS}>ComponentItem</ComponentItem>;
    }
    return <div>ComponentItem not found</div>;
  }
}

export default Detail;
