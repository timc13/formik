/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { FormikProps } from './formik';
export declare type GenericFieldHTMLAttributes =
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.SelectHTMLAttributes<HTMLSelectElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface FieldProps<V = any> {
  field: {
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: any) => void;
    value: any;
    name: string;
  };
  form: FormikProps<V>;
}
export interface FieldConfig {
  component?: string | React.ComponentType<FieldProps<any> | void>;
  render?: ((props: FieldProps<any>) => React.ReactNode);
  children?: ((props: FieldProps<any>) => React.ReactNode);
  validate?: ((value: any) => string | Function | Promise<void> | undefined);
  name: string;
  type?: string;
  value?: any;
}
export declare type FieldAttributes = GenericFieldHTMLAttributes & FieldConfig;
export declare class Field<
  Props extends FieldAttributes = any
> extends React.Component<Props, {}> {
  static contextTypes: {
    formik: PropTypes.Requireable<any>;
  };
  static propTypes: {
    name: PropTypes.Validator<any>;
    component: PropTypes.Requireable<any>;
    render: PropTypes.Requireable<any>;
    children: PropTypes.Requireable<any>;
    validate: PropTypes.Requireable<any>;
  };
  componentWillMount(): void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  runFieldValidations: (value: any) => void;
  render(): any;
}
