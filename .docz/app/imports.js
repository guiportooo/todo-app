export const imports = {
  'src/HelloWorld.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-hello-world" */ 'src/HelloWorld.mdx'),
}
