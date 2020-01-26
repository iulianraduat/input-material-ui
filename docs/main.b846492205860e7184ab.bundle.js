(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(module,__webpack_exports__,__webpack_require__){"use strict";var classCallCheck=__webpack_require__(136),createClass=__webpack_require__(137),possibleConstructorReturn=__webpack_require__(144),getPrototypeOf=__webpack_require__(138),inherits=__webpack_require__(145),react=__webpack_require__(0),objectSpread2=__webpack_require__(317),InputLabel=__webpack_require__(702),FormHelperText=__webpack_require__(699),FormControl=__webpack_require__(701),Input=__webpack_require__(700),lodash=__webpack_require__(36),style={height:"1.1875rem"},InputField_getType=function getType(type){return Object(lodash.isEmpty)(type)?"text":type},src_InputField=function InputField(props){var inputProps=props.inputProps?props.inputProps:{inputProps:{}};return react.createElement(FormControl.a,{fullWidth:!0},function getLabel(id,label,inputLabelProps){return Object(lodash.isEmpty)(label)?null:(void 0===inputLabelProps&&(inputLabelProps={}),react.createElement(InputLabel.a,Object.assign({},inputLabelProps,{htmlFor:id}),label))}(props.id,props.label,props.inputLabelProps),react.createElement(Input.a,Object.assign({},inputProps,{id:props.id,inputProps:Object(objectSpread2.a)({},inputProps.inputProps,{style:style}),type:InputField_getType(props.type),placeholder:props.placeholder,value:props.value,name:Object(lodash.kebabCase)(props.id||props.label||props.placeholder),onFocus:props.onGotFocus,onBlur:props.onLostFocus,onChange:props.onChange,startAdornment:props.startAdornment,endAdornment:props.endAdornment})),function getHelperText(helperText,helperTextProps){return Object(lodash.isEmpty)(helperText)?null:(void 0===helperTextProps&&(helperTextProps={}),react.createElement(FormHelperText.a,helperTextProps,helperText))}(props.helperText,props.helperTextProps))},Clear=__webpack_require__(316),Clear_default=__webpack_require__.n(Clear),InputAdornment=__webpack_require__(143),InputAdornment_default=__webpack_require__.n(InputAdornment),styles={adornment:{color:"#ff0000",cursor:"pointer",fontWeight:"bolder"},svg:{width:18,height:18}},src_RemoveValue=function RemoveValue(props){return react.createElement(InputAdornment_default.a,{style:styles.adornment,position:"end"},react.createElement("div",{"aria-label":"Remove the value",onClick:props.onClick},react.createElement(Clear_default.a,{style:styles.svg})))},src_EyeSlashSvg=function EyeSlashSvg(props){return react.createElement("svg",{height:props.size,width:props.size,viewBox:"0 0 576 512",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z",fill:"#0080cc"}))},src_EyeSvg=function EyeSvg(props){return react.createElement("svg",{height:props.size,width:props.size,viewBox:"0 0 576 512",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z",fill:"#0080cc"}))},SeeHidePassword_styles={adornment:{color:"#0080cc",cursor:"pointer"},iconContainer:{display:"flex"}},src_SeeHidePassword=function(_React$Component){function SeeHidePassword(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,SeeHidePassword);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(SeeHidePassword)).call.apply(_getPrototypeOf2,[this].concat(args)))).handleClick=function(){return _this.props.onClick(!_this.props.isPasswordVisible)},_this}return Object(inherits.a)(SeeHidePassword,_React$Component),Object(createClass.a)(SeeHidePassword,[{key:"render",value:function render(){return react.createElement(InputAdornment_default.a,{style:SeeHidePassword_styles.adornment,position:"start"},react.createElement("div",{"aria-label":this.getAriaLabel(),onClick:this.handleClick,style:SeeHidePassword_styles.iconContainer},this.getIcon()))}},{key:"getAriaLabel",value:function getAriaLabel(){return this.props.isPasswordVisible?"Hide the password":"See the password"}},{key:"getIcon",value:function getIcon(){return this.props.isPasswordVisible?react.createElement(src_EyeSlashSvg,{size:20}):react.createElement(src_EyeSvg,{size:20})}}]),SeeHidePassword}(react.Component),InputMaterialUi_InputMaterialUi=function(_React$PureComponent){function InputMaterialUi(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,InputMaterialUi);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(InputMaterialUi)).call.apply(_getPrototypeOf2,[this].concat(args)))).state={isPasswordVisible:!1,value:""},_this.handleChange=function(event){return _this.handleChangeValue(event.target.value)},_this.handleRemoveValue=function(){return _this.handleChangeValue("")},_this.handleChangeValue=function(value){_this.setState({value:value}),_this.props.onChange(value)},_this.handleInputVisibility=function(isPasswordVisible){return _this.setState({isPasswordVisible:isPasswordVisible})},_this}return Object(inherits.a)(InputMaterialUi,_React$PureComponent),Object(createClass.a)(InputMaterialUi,[{key:"render",value:function render(){var _this$props=this.props,FormHelperTextProps=_this$props.FormHelperTextProps,helperText=_this$props.helperText,id=_this$props.id,InputLabelProps=_this$props.InputLabelProps,InputProps=_this$props.InputProps,label=_this$props.label,placeholder=_this$props.placeholder,valueInProps=_this$props.value,valueInState=this.state.value,value=Object(lodash.isNil)(valueInProps)?valueInState:valueInProps;return react.createElement(src_InputField,{endAdornment:this.getEndAdornament(),helperText:helperText,helperTextProps:FormHelperTextProps,id:id,inputLabelProps:InputLabelProps,inputProps:InputProps,label:label,onChange:this.handleChange,placeholder:placeholder,startAdornment:this.getStartAdornament(),type:this.getType(),value:value})}},{key:"componentDidMount",value:function componentDidMount(){var value=this.props.value;!1===Object(lodash.isNil)(value)&&value!==this.state.value&&this.setState({value:this.props.value})}},{key:"getType",value:function getType(){var type=this.props.type;return Object(lodash.isNil)(type)?"text":"password"!==type?type:this.state.isPasswordVisible?"text":"password"}},{key:"getStartAdornament",value:function getStartAdornament(){if("password"!==this.props.type)return null;var isPasswordVisible=this.state.isPasswordVisible;return react.createElement(src_SeeHidePassword,{isPasswordVisible:isPasswordVisible,onClick:this.handleInputVisibility})}},{key:"getEndAdornament",value:function getEndAdornament(){return Object(lodash.isEmpty)(this.state.value)?null:react.createElement(src_RemoveValue,{onClick:this.handleRemoveValue})}}]),InputMaterialUi}(react.PureComponent);__webpack_exports__.a=InputMaterialUi_InputMaterialUi},319:function(module,exports,__webpack_require__){__webpack_require__(320),__webpack_require__(466),module.exports=__webpack_require__(467)},384:function(module,exports){},467:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(135);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(656)}),module)}.call(this,__webpack_require__(254)(module))},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(135),style={height:20},inputLabelProps={style:{color:"#000088",fontWeight:"bold",marginLeft:20}},inputProps={style:{color:"#888888",fontStyle:"italic"}},helperTextProps={style:{color:"white",backgroundColor:"red",padding:3}},doNothing=function doNothing(){};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("InputMaterialUi",module).addParameters({options:{showPanel:!1}}).add("the field",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"As text field",onChange:doNothing}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"As password field",type:"password",onChange:doNothing}))})).add("with value",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"As text field",value:"username",onChange:doNothing}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"As password field",value:"password",type:"password",onChange:doNothing}))})).add("with placeholder",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"With placeholder",placeholder:"Start writing here",onChange:doNothing}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"With placeholder",placeholder:"Start writing here",type:"password",onChange:doNothing}))})).add("with helper text",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"With helper text",helperText:"My I suggest?",onChange:doNothing}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"With helper text",helperText:"My I suggest?",type:"password",onChange:doNothing}))})).add("customized",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"As text field",placeholder:"Start writing here",helperText:"My I suggest?",InputLabelProps:inputLabelProps,InputProps:inputProps,FormHelperTextProps:helperTextProps,onChange:doNothing}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_InputMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"As password field",placeholder:"Start writing here",helperText:"My I suggest?",InputLabelProps:inputLabelProps,InputProps:inputProps,FormHelperTextProps:helperTextProps,type:"password",onChange:doNothing}))}))}.call(this,__webpack_require__(254)(module))}},[[319,1,2]]]);
//# sourceMappingURL=main.b846492205860e7184ab.bundle.js.map