const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir}';`;
  }
};
