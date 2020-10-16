import path from 'path'
import write from 'write'
import { introspectionQuery, graphql, printSchema } from 'gatsby/graphql'

export const onPostBootstrap = async ({ store }) => {
  try {
    const { schema } = store.getState()
    const jsonSchema = await graphql(schema, introspectionQuery)
    const sdlSchema = printSchema(schema)

    write.sync('schema.json', JSON.stringify(jsonSchema.data), {})
    write.sync('schema.graphql', sdlSchema, {})

    console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n') // eslint-disable-line
  } catch (error) {
    console.error(
      '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
      error,
      '\n'
    )
  }
}

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.', 'src'),
      },
    },
  })
}
