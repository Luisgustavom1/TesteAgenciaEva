import { typeTheme } from '../Types/types'

declare module 'styled-components' {
    export interface DefaultTheme {
      bwBlack: string,
      bwBlack2: string,
      bwWhite: string,
      bwWhite1: string,
      bwWhite2: string,
      helpersWarning: string,
      helpersInfo: string,
      brandPrimary: string,
      brandPrimaryLight: string,
      brandPrimaryDark: string
    }
}