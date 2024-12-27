import {Schema} from '@iterativa/core/schema'
import {Args, Command, Flags} from '@oclif/core'

export default class Create extends Command {
    static override args = {
        name: Args.string({description: 'name of the schema', required: true}),
    }

    static override description = 'create a JSON Schema'

    static override examples = ['<%= config.bin %> <%= command.id %>']

    public async run(): Promise<void> {
        const {args} = await this.parse(Create)
        const schema = new Schema()

        console.log(args.name)
        console.log(schema.toJSONSchema())
    }
}
