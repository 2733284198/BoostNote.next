import styled from '../../desktop/lib/styled'

export const BoostnoteIconStyledContainer = styled.div`
  display: inline-block;
  color: currentColor;
  background-color: transparent;
  border: none;

  svg {
    vertical-align: middle;

    &.icon {
      position: absolute;
      top: 5px;
      left: 5px;
      font-size: 20px;
      z-index: 0;
      pointer-events: none;
      color: rgba(255, 255, 255, 0.3);
    }
  }
`

export interface BoostnoteIconProps {
  viewbox?: string
  color?: string
  size?: string | number
  width?: string | number
  height?: string | number
  className?: string
  style?: React.CSSProperties
}
