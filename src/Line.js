/**
 * @flow
 */

import * as React from 'react'
import { Shape } from '@react-native-community/art'
import { makeLine } from './shape'
import * as typed from './typed'

type Props = typed.ShareProps

const Line = ({ points, color, stroke, strokeWidth }: Props) => (
  <Shape
    stroke={stroke || color}
    strokeWidth={strokeWidth}
    d={makeLine(points)}
    visible={true}
  />
)

export default Line
