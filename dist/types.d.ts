/// <reference types="react" />
import * as React from 'react';
export declare type CompositeComponent<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;
export interface ComponentDecorator<TOwnProps, TMergedProps> {
  (component: CompositeComponent<TMergedProps>): React.ComponentClass<
    TOwnProps
  >;
}
export interface InferableComponentDecorator<TOwnProps> {
  <T extends CompositeComponent<TOwnProps>>(component: T): T;
}
export interface SharedRenderProps<T> {
  component?: string | React.ComponentType<T | void>;
  render?: ((props: T) => React.ReactNode);
  children?: ((props: T) => React.ReactNode);
}
