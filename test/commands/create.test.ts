import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('create', () => {
    it('runs create mySchema', async () => {
        const {stdout} = await runCommand('create mySchema')
        expect(stdout).to.contain('mySchema')
        expect(stdout).to.contain('https://json-schema.org/draft/2020-12')
    })
})
