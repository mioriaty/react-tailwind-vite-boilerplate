import { ComponentType } from 'react';

interface HomeLocationState {}
interface NotFoundLocationState {}

export interface LocationStates {
  '/'?: HomeLocationState;
  '/page404'?: NotFoundLocationState;
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
