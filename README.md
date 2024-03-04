# 🚀 Micro Frontend PoC with Webpack & Javascript(without frameworks)
We are using the webpack feature called Module Federation to make micro frontends. To make it possible, we are configuring the `ModuleFederationPlugin` plugin in the webpack.config file of each application:
- **Host**: [webpack.config.js](https://github.com/VictorMagalhaesSales/poc-webpack-microfrontend/blob/main/webpack.config.js) (declaring remote modules)
- **First MFE**: [webpack.config.js](https://github.com/VictorMagalhaesSales/poc-webpack-microfrontend/blob/main/projects/first-mfe/webpack.config.js) (exposing remote module)
- **Second MFE**: [webpack.config.js](https://github.com/VictorMagalhaesSales/poc-webpack-microfrontend/blob/main/projects/second-mfe/webpack.config.js) (exposing remote module)

# 🔸 Running
To run this host application and MFEs you need to first install dependencies for all of them:
```
npm run install:all
```
Then you can run the host application and the two MFEs to be loaded:

```
npm run serve
npm run serve:first-mfe
npm run serve:second-mfe
```

# 🔸 Once the host application has started:
<img src="https://user-images.githubusercontent.com/20648428/216827583-cad97f20-4d70-4428-a04c-0ce585805356.png">
<br><br>

# 🔸 Downloading the MFEs:
<img src="https://user-images.githubusercontent.com/20648428/216827328-9aafff49-2582-4e3b-b3cb-8cdf27775762.png"> 
<br><br>

# 🔸 Showing the mfes:
<img src="https://user-images.githubusercontent.com/20648428/216827319-7c21e603-e9fb-4961-8d88-1ee0b130bb04.png"> 
