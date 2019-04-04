// @flow
import {elementOpen, elementClose} from 'incremental-dom'
import Hello from './hello'

export default function() {
  elementOpen('div')
  Hello()
  elementClose('div')
}