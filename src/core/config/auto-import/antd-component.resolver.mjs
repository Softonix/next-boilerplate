
import { kebabCase } from 'lodash-es'

const matchComponents = [
  {
    pattern: /^Affix/,
    styleDir: 'affix',
  },
  {
    pattern: /^Avatar/,
    styleDir: 'avatar',
  },
  {
    pattern: /^AutoComplete/,
    styleDir: 'auto-complete',
  },
  {
    pattern: /^Alert/,
    styleDir: 'alert',
  },
  {
    pattern: /^Anchor/,
    styleDir: 'anchor',
  },
  {
    pattern: /^App/,
    styleDir: 'app',
  },
  {
    pattern: /^Badge/,
    styleDir: 'badge',
  },
  {
    pattern: /^Breadcrumb/,
    styleDir: 'breadcrumb',
  },
  {
    pattern: /^Button/,
    styleDir: 'button',
  },
  {
    pattern: /^Checkbox/,
    styleDir: 'checkbox',
  },
  {
    pattern: /^Calendar/,
    styleDir: 'calendar',
  },
  {
    pattern: /^Card/,
    styleDir: 'card',
  },
  {
    pattern: /^Carousel/,
    styleDir: 'carousel',
  },
  {
    pattern: /^Collapse/,
    styleDir: 'collapse',
  },
  {
    pattern: /^Comment/,
    styleDir: 'comment',
  },
  {
    pattern: /^Descriptions/,
    styleDir: 'descriptions',
  },
  {
    pattern: /^RangePicker|^WeekPicker|^MonthPicker/,
    styleDir: 'date-picker',
  },
  {
    pattern: /^Divider/,
    styleDir: 'divider',
  },
  {
    pattern: /^Drawer/,
    styleDir: 'drawer',
  },
  {
    pattern: /^Dropdown/,
    styleDir: 'dropdown',
  },
  {
    pattern: /^Empty/,
    styleDir: 'empty',
  },
  {
    pattern: /^Flex/,
    styleDir: 'flex',
  },
  {
    pattern: /^FloatButton/,
    styleDir: 'float-button',
  },
  {
    pattern: /^Form/,
    styleDir: 'form',
  },
  {
    pattern: /^Grid/,
    styleDir: 'grid',
  },
  {
    pattern: /^InputNumber/,
    styleDir: 'input-number',
  },

  {
    pattern: /^Input|^Textarea/,
    styleDir: 'input',
  },
  {
    pattern: /^Statistic/,
    styleDir: 'statistic',
  },
  {
    pattern: /^CheckableTag/,
    styleDir: 'tag',
  },
  {
    pattern: /^TimeRangePicker/,
    styleDir: 'time-picker',
  },
  {
    pattern: /^Layout/,
    styleDir: 'layout',
  },
  {
    pattern: /^Menu|^SubMenu/,
    styleDir: 'menu',
  },

  {
    pattern: /^Table/,
    styleDir: 'table',
  },
  {
    pattern: /^TimePicker|^TimeRangePicker/,
    styleDir: 'time-picker',
  },
  {
    pattern: /^Radio/,
    styleDir: 'radio',
  },

  {
    pattern: /^Image/,
    styleDir: 'image',
  },

  {
    pattern: /^List/,
    styleDir: 'list',
  },

  {
    pattern: /^Tab/,
    styleDir: 'tabs',
  },
  {
    pattern: /^Mentions/,
    styleDir: 'mentions',
  },

  {
    pattern: /^Step/,
    styleDir: 'steps',
  },
  {
    pattern: /^Skeleton/,
    styleDir: 'skeleton',
  },

  {
    pattern: /^Select/,
    styleDir: 'select',
  },
  {
    pattern: /^TreeSelect/,
    styleDir: 'tree-select',
  },
  {
    pattern: /^Tree|^DirectoryTree/,
    styleDir: 'tree',
  },
  {
    pattern: /^Typography/,
    styleDir: 'typography',
  },
  {
    pattern: /^Timeline/,
    styleDir: 'timeline',
  },
  {
    pattern: /^Upload/,
    styleDir: 'upload',
  },
  {
    pattern: /^Qrcode/,
    styleDir: 'qrcode',
  },
  {
    pattern: /^Space/,
    styleDir: 'space',
  },
]

function getStyleDir(compName) {
  let styleDir
  const total = matchComponents.length
  for (let i = 0; i < total; i++) {
    const matcher = matchComponents[i]
    if (compName.match(matcher.pattern)) {
      styleDir = matcher.styleDir
      break
    }
  }
  if (!styleDir) styleDir = kebabCase(compName)

  return styleDir
}

function getSideEffects(compName, options) {
  const { importStyle = true, importLess = false } = options

  if (!importStyle) return
  const lib = options.cjs ? 'lib' : 'es'
  const packageName = options?.packageName || 'antd'

  if (importStyle === 'less' || importStyle === 'css-in-js' || importLess) {
    const styleDir = getStyleDir(compName)
    return `${packageName}/${lib}/${styleDir}/style`
  } else {
    const styleDir = getStyleDir(compName)
    return `${packageName}/${lib}/${styleDir}/style/css`
  }
}
const primitiveNames = [
  'Affix',
  'Anchor',
  'AnchorLink',
  'AutoComplete',
  'AutoCompleteOptGroup',
  'AutoCompleteOption',
  'Alert',
  'Avatar',
  'AvatarGroup',
  'BackTop',
  'Badge',
  'BadgeRibbon',
  'Breadcrumb',
  'BreadcrumbItem',
  'BreadcrumbSeparator',
  'Button',
  'ButtonGroup',
  'Calendar',
  'Card',
  'CardGrid',
  'CardMeta',
  'Collapse',
  'CollapsePanel',
  'Carousel',
  'Cascader',
  'Checkbox',
  'CheckboxGroup',
  'Col',
  'Comment',
  'ConfigProvider',
  'DatePicker',
  'MonthPicker',
  'WeekPicker',
  'RangePicker',
  'QuarterPicker',
  'Descriptions',
  'DescriptionsItem',
  'Divider',
  'Dropdown',
  'DropdownButton',
  'Drawer',
  'Empty',
  'Form',
  'FormItem',
  'FormItemRest',
  'Grid',
  'Input',
  'InputGroup',
  'InputPassword',
  'InputSearch',
  'Textarea',
  'Image',
  'ImagePreviewGroup',
  'InputNumber',
  'Layout',
  'LayoutHeader',
  'LayoutSider',
  'LayoutFooter',
  'LayoutContent',
  'List',
  'ListItem',
  'ListItemMeta',
  'Menu',
  'MenuDivider',
  'MenuItem',
  'MenuItemGroup',
  'SubMenu',
  'Mentions',
  'MentionsOption',
  'Modal',
  'Statistic',
  'StatisticCountdown',
  'PageHeader',
  'Pagination',
  'Popconfirm',
  'Popover',
  'Progress',
  'Radio',
  'RadioButton',
  'RadioGroup',
  'Rate',
  'Result',
  'Row',
  'Select',
  'SelectOptGroup',
  'SelectOption',
  'Skeleton',
  'SkeletonButton',
  'SkeletonAvatar',
  'SkeletonInput',
  'SkeletonImage',
  'Slider',
  'Space',
  'Spin',
  'Steps',
  'Step',
  'Switch',
  'Table',
  'TableColumn',
  'TableColumnGroup',
  'TableSummary',
  'TableSummaryRow',
  'TableSummaryCell',
  'Transfer',
  'Tree',
  'TreeNode',
  'DirectoryTree',
  'TreeSelect',
  'TreeSelectNode',
  'Tabs',
  'TabPane',
  'Tag',
  'CheckableTag',
  'TimePicker',
  'TimeRangePicker',
  'Timeline',
  'TimelineItem',
  'Tooltip',
  'Typography',
  'TypographyLink',
  'TypographyParagraph',
  'TypographyText',
  'TypographyTitle',
  'Upload',
  'UploadDragger',
  'LocaleProvider',
  'FloatButton',
  'FloatButtonGroup',
  'Qrcode',
  'Watermark',
  'Segmented',
  'Tour',
  'SpaceCompact',
  'StyleProvider',
  'Flex',
  'App',
]

let antdvNames

function genAntdNames(primitiveNames) {
  antdvNames = new Set(primitiveNames)
}
genAntdNames(primitiveNames)

function isAntdv(compName) {
  return antdvNames.has(compName)
}

export default function AntDesignResolver(options = {}) {
  const originPrefix = options.prefix ?? 'A'
  return {
    type: 'component',
    resolve: (name) => {
      const [compName, prefix] = [name.slice(originPrefix.length), name.slice(0, originPrefix.length)]
      if (prefix === originPrefix && isAntdv(compName) && !options?.exclude?.includes(compName)) {
        const { cjs = false, packageName = 'antd' } = options
        const path = `${packageName}/${cjs ? 'lib' : 'es'}/${kebabCase(compName)}`
        return {
          name: 'default',
          from: path,
          sideEffects: getSideEffects(compName, options),
        }
      }
    },
  }
}
