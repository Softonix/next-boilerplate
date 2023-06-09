const { pascalCase } = require('change-case')

module.exports = {
  antd: [
    'Affix',
    'Alert',
    'Anchor',
    'App',
    'AutoComplete',
    'Avatar',
    'BackTop',
    'Badge',
    'Breadcrumb',
    'Button',
    'Calendar',
    'Card',
    'Carousel',
    'Cascader',
    'Checkbox',
    'Col',
    'Collapse',
    'ConfigProvider',
    'DatePicker',
    'Descriptions',
    'Divider',
    'Drawer',
    'Dropdown',
    'Empty',
    'FloatButton',
    'Form',
    'Grid',
    'Image',
    'Input',
    'InputNumber',
    'Layout',
    'List',
    'Mentions',
    'Menu',
    'message',
    'Modal',
    'notification',
    'Pagination',
    'Popconfirm',
    'Popover',
    'Progress',
    'QRCode',
    'Radio',
    'Rate',
    'Result',
    'Row',
    'Segmented',
    'Select',
    'Skeleton',
    'Slider',
    'Space',
    'Spin',
    'Statistic',
    'Steps',
    'Switch',
    'Table',
    'Tabs',
    'Tag',
    'theme',
    'TimePicker',
    'Timeline',
    'Tooltip',
    'Tour',
    'Transfer',
    'Tree',
    'TreeSelect',
    'Typography',
    'Upload',
    'version',
    'Watermark'
  ].map(name => [name, `Ant${pascalCase(name)}`])
}
