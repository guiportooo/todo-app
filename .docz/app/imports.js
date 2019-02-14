export const imports = {
  'src/components/AddButton/AddButton.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-add-button-add-button" */ 'src/components/AddButton/AddButton.mdx'),
  'src/components/Buttons/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-buttons-button" */ 'src/components/Buttons/Button.mdx'),
  'src/components/CreateButton/CreateButton.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-button-create-button" */ 'src/components/CreateButton/CreateButton.mdx'),
}
