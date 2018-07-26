import { SFUISchemaItem } from './ui';

export interface SFSchemaDefinition {
  [key: string]: SFSchema;
}

export interface SFSchemaEnum {
  [key: string]: any;
  disabled?: boolean;
  label?: any;
  title?: any;
  value?: any;
  checked?: boolean;
  group?: boolean;
  children?: SFSchemaEnum[];
}

export type SFSchemaEnumType = SFSchemaEnum | number | string | boolean;

/**
 * JSON Schema Form 结构体
 *
 * **注意：** 所有结构都以标准为基准，除了 `ui` 属性为非标准单纯只是为了更好的开发
 */
export interface SFSchema {
  type?: 'number' | 'integer' | 'string' | 'boolean' | 'object' | 'array';
  /**
   * 枚举，静态数据源，例如：`radio`、`checkbox` 等
   *
   * - `disabled` 属性表示：禁用状态
   * - `label` 属性表示：文本
   * - `value` 属性表示：返回值
   * - 基础数据类型数组会自动转化成 `SFSchemaEnum` 数组格式
   */
  enum?: SFSchemaEnumType[];
  //////////// 数值类型 /////////////
  minimum?: number;
  exclusiveMinimum?: boolean;
  maximum?: number;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
  //////////// 字符串类型/////////////
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  //////////// 数组类型/////////////
  items?: SFSchema;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  additionalItems?: SFSchema;
  //////////// 对象类型/////////////
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  properties?: { [key: string]: SFSchema };
  //////////// 条件类/////////////
  if?: SFSchema;
  then?: SFSchema;
  else?: SFSchema;
  allOf?: SFSchema[];
  anyOf?: SFSchema[];
  oneOf?: SFSchema[];
  //////////// 格式/////////////
  format?: string;
  title?: string;
  description?: string;
  default?: any;
  readOnly?: boolean;
  definitions?: SFSchemaDefinition;
  $ref?: string;
  $comment?: string;
  ui?: SFUISchemaItem | string;
}
