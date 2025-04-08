module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Find the source-map-loader rule
        const sourceMapRule = webpackConfig.module.rules.find(
          (rule) => rule.enforce === 'pre' && rule.use?.loader?.includes('source-map-loader')
        );
        
        // Exclude @mediapipe from source-map-loader
        if (sourceMapRule) {
          sourceMapRule.exclude = [
            ...(sourceMapRule.exclude || []),
            /@mediapipe\/tasks-vision/
          ];
        }
        
        return webpackConfig;
      }
    }
  };