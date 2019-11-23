import mockArgv from 'mock-argv'
import expect from 'expect'
import firstArgv from './first-argv'

export default done => {
  mockArgv(['foo', 'bar'], () => { expect(process.argv).toEqual([...firstArgv, 'foo', 'bar']); done() })
}