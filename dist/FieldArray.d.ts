/// <reference types="react" />
import * as React from 'react';
import { SharedRenderProps } from './types';
import * as PropTypes from 'prop-types';
import { FormikProps } from './formik';
export declare type FieldArrayConfig = {
  name: string;
} & SharedRenderProps<
  ArrayHelpers & {
    form: FormikProps<any>;
  }
>;
export interface ArrayHelpers {
  push: (obj: any) => void;
  swap: (indexA: number, indexB: number) => void;
  move: (from: number, to: number) => void;
  insert: (index: number, value: any) => void;
  unshift: (value: any) => number;
  remove<T>(index: number): T | undefined;
  pop<T>(): T | undefined;
}
export interface FieldArrayState {}
export declare class FieldArray extends React.Component<
  FieldArrayConfig,
  FieldArrayState
> {
  static contextTypes: {
    formik: PropTypes.Requireable<any>;
  };
  changeValue: (fn: Function) => void;
  changeTouched: (fn: Function) => void;
  push: (value: any) => void;
  swap: (indexA: number, indexB: number) => void;
  move: (from: number, to: number) => void;
  insert: (index: number, value: any) => void;
  unshift: (value: any) => number;
  remove: (index: number) => undefined;
  pop: () => undefined;
  render(): any;
}
