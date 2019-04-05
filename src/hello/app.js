// @flow
import {
  patch
} from 'incremental-dom'
import List from './list'

export default function App(root/*:any*/) {
  const applyPatch = () => patch(root, render)
  applyPatch()
}

function render() {
  List()
}