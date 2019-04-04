import {
  elementOpen,
  elementClose,
  text
} from 'incremental-dom'

export default function() {
  elementOpen('div')
  elementOpen('h1')
  text('hello, world!')
  elementClose('h1')
  elementClose('div')
}