/// <reference types="@nasl/types" />

namespace nasl.ui {
  @Component({
    title: '线性布局',
    icon: 'linear-layout',
    description: '内部元素按照一定的规则布局',
    group: 'Layout',
  })
  export class Flex extends ViewComponent {
    // @Method({
    //   title: '打开加载中',
    //   description: '打开加载中',
    // })
    // openLoading(): void {}

    // @Method({
    //   title: '关闭加载中',
    //   description: '关闭加载中',
    // })
    // closeLoading(): void {}
    constructor(options?: Partial<FlexOptions>) {
      super();
    }
  }

  export class FlexOptions extends ViewComponentOptions {
    @Prop({
      title: '展示方式',
      description: '行内展示，或块级换行展示',
      setter: {
        concept: 'EnumSelectSetter',
        options: [{ title: '行内' }, { title: '块级' }],
      },
    })
    private display: 'inline' | 'block' = 'block';

    @Prop({
      title: '布局模式',
      description: '布局模式',
      setter: {
        concept: 'EnumSelectSetter',
        options: [{ title: 'flex 布局模式' }],
      },
    })
    private type: 'flex';

    @Prop({
      group: '主要属性',
      title: '开启滚动',
      description: '超出高度后开启滚动',
      // docDescription: '控制是否在进入页面时聚焦到该组件',
      designerValue: false,
      setter: {
        concept: 'SwitchSetter',
      },
    })
    scroll: nasl.core.Boolean = false;

    //     @Prop<FlexOptions, 'mode'>({
    //       group: '主要属性',
    //       title: '布局模式',
    //       tooltipLink:
    //         'http://help.lcap.163yun.com/1.%E5%BC%80%E5%8F%91%E5%BA%94%E7%94%A8/2.%E9%A1%B5%E9%9D%A2/05.PC%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6/01.%E5%B8%83%E5%B1%80/020.%E7%BA%BF%E6%80%A7%E5%B8%83%E5%B1%80.html',
    //       docDescription: `内联布局：将当前元素修改为内联布局模式，各个内联布局模式的元素将默认排布在同一行中，若空间不足以排布下一个内联布局元素，则该元素将会换行。
    // 块级布局：将当前元素修改为块级布局模式，各个块级布局模式的元素之前和之后均会换行。
    // 弹性布局：在弹性布局模式中，子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免溢出父元素。`,
    //       bindHide: true,
    //       setter: {
    //         concept: 'CapsulesSetter',
    //         options: [
    //           { title: '行内', icon: 'layout-inline-block', tooltip: '内联布局' },
    //           { title: '块级', icon: 'layout-block', tooltip: '块级布局' },
    //           { title: '弹性', icon: 'layout-flex', tooltip: '弹性布局' },
    //         ],
    //       },
    //       onChange: [{ clear: ['justify', 'alignment', 'wrap', 'layout'] }],
    //       tabKind: 'style',
    //     })
    //     mode: 'inline' | 'block' | 'flex' = 'block';

    @Prop<FlexOptions, 'direction'>({
      group: '主要属性',
      title: '主轴方向',
      docDescription: ` 主轴的方向是否垂直`,
      bindHide: true,
      // setter: {
      //   concept: 'SwitchSetter',
      // },
      setter: {
        concept: 'CapsulesSetter',
        options: [
          { title: '横向排列', icon: 'flex-horizontal', tooltip: '横向' },
          { title: '纵向排列', icon: 'flex-vertical', tooltip: '纵向' },
        ],
      },
      onChange: [{ clear: ['justify', 'alignment'] }],
      tabKind: 'style',
      // onChange: [{ clear: ['justify', 'alignment'] }],
      // tabKind: 'style',
    })
    direction: 'horizontal' | 'vertical' = 'horizontal';
    // vertical: false | true = false;

    @Prop<FlexOptions, 'justify'>({
      group: '主要属性',
      title: '主轴对齐',
      docDescription: `设置元素在主轴方向上的对齐方式	：支持左对齐、居中对齐、右对齐、平均分布（两端不留空）、平均分布，。 `,
      bindHide: true,
      setter: {
        concept: 'CapsulesSetter',
        options: [
          { title: '左对齐', icon: 'horizontal-justify-start', tooltip: '左对齐' },
          { title: '居中对齐', icon: 'horizontal-justify-center', tooltip: '居中对齐' },
          { title: '右对齐', icon: 'horizontal-justify-end', tooltip: '右对齐' },
          {
            title: '平均分布(两端不留空)',
            icon: 'horizontal-justify-space-between',
            tooltip: '平均分布(两端不留空)',
          },
          {
            title: '平均分布',
            icon: 'horizontal-justify-space-around',
            tooltip: '平均分布',
          },
        ],
      },
      tabKind: 'style',
    })
    justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around' = 'start';

    @Prop<FlexOptions, 'alignment'>({
      group: '主要属性',
      title: '交叉轴对齐',
      docDescription: `设置元素在交叉轴方向上的对齐方式：支持顶对齐、垂直居中、底对齐、行内文字基线对齐、占满容器高度。`,
      bindHide: true,
      setter: {
        concept: 'CapsulesSetter',
        options: [
          { title: '顶对齐', icon: 'horizontal-alignment-start', tooltip: '顶对齐' },
          { title: '垂直居中', icon: 'horizontal-alignment-center', tooltip: '垂直居中' },
          { title: '底对齐', icon: 'horizontal-alignment-end', tooltip: '底对齐' },
          { title: '行内文字基线对齐', icon: 'horizontal-alignment-baseline', tooltip: '行内文字基线对齐' },
          { title: '占满容器高度', icon: 'horizontal-alignment-stretch', tooltip: '占满容器高度' },
        ],
      },
      tabKind: 'style',
    })
    alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch' = 'stretch';

    @Prop<FlexOptions, 'wrap'>({
      group: '主要属性',
      title: '换行',
      description: '设置弹性布局下子元素总宽度超出父级时子元素是否换行展示',
      docDescription: '支持控制弹性布局模式下，子元素总宽度超过父级时是否换行展示，默认开启。',
      setter: {
        concept: 'EnumSelectSetter',
        options: [{ title: '换行' }, { title: '不换行' }],
      },
      tabKind: 'style',
    })
    wrap: 'wrap' | 'nowrap' = 'wrap';

    // @Prop({
    //   group: '状态属性',
    //   title: '加载中图标',
    //   description: '加载中状态显示的图标',
    //   docDescription: '支持从图标库选择图标或上传自定义图标。',
    //   setter: {
    //     concept: 'IconSetter',
    //   },
    // })
    // loadingIcon: nasl.core.String = 'loading';

    // @Prop({
    //   group: '状态属性',
    //   title: '加载中图标旋转',
    //   description: '设置加载中图标是否旋转，默认开启。',
    //   docDescription: '支持控制加载中图标是否旋转，默认开启。',
    //   setter: {
    //     concept: 'SwitchSetter',
    //   },
    // })
    // loadingIconRotate: nasl.core.Boolean = true;

    // @Prop({
    //   group: '状态属性',
    //   title: '加载中文案',
    //   description: '加载中状态显示的提示文案',
    //   docDescription: '支持编辑组件加载中情况显示文案。',
    // })
    // loadingText: nasl.core.String = '';

    @Prop<FlexOptions, 'gap'>({
      group: '样式属性',
      title: '内容间隙',
      description: '内容块间隙大小',
      docDescription: '布局内各个组件之间的间隔，通常有收缩、无、小、正常、大，默认为正常。',
      setter: {
        concept: 'EnumSelectSetter',
        options: [{ title: '小' }, { title: '正常' }, { title: '大' }, { title: '无' }],
      },
    })
    gap: 'small' | 'middle' | 'large' | 0 = 0;

    @Event({
      title: '点击',
      description: '在元素上按下并释放任意鼠标按钮时触发。',
    })
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => any;

    @Event({
      title: '双击',
      description: '在元素上双击鼠标按钮时触发。',
    })
    onDoubleClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => any;

    @Event({
      title: '右键点击',
      description: '在右键菜单显示前触发。',
    })
    onContextMenu: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => any;

    @Event({
      title: '鼠标按下',
      description: '在元素上按下任意鼠标按钮时触发。',
    })
    onMouseDown: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => any;

    @Event({
      title: '鼠标释放',
      description: '在元素上释放任意鼠标按钮时触发。',
    })
    onMouseUp: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => any;

    @Event({
      title: '鼠标移入',
      description: '鼠标移入元素时触发。',
    })
    onMouseEnter: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => any;

    @Event({
      title: '鼠标移出',
      description: '鼠标移出元素时触发。',
    })
    onMouseLeave: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => any;

    @Event({
      title: '滚动时',
      description: '滚动时触发',
    })
    onScroll: (event: {
      scrollTop: nasl.core.Integer;
      scrollLeft: nasl.core.Integer;
      scrollWidth: nasl.core.Integer;
      scrollHeight: nasl.core.Integer;
      clientWidth: nasl.core.Integer;
      clientHeight: nasl.core.Integer;
    }) => any;

    @Slot({
      title: '默认',
      description: '内容',
    })
    slotDefault: () => Array<ViewComponent>;
  }
}
