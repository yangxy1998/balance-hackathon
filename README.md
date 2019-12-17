# 均衡教派-黑客马拉松
## 项目说明
### 注意需要使用webstorm解决跨域问题，直接在webstorm启动后提供的端口访问ui.html：
##### http://localhost:63342/balance-hackathon/ui.html
### 想要生成对局数据需要在`/solo`目录下执行`node test`,根据需要修改`solo/test.js`的内容。
## 项目结构
### 游戏逻辑：`solo/Game`
### 基础AI：`solo/BaseData`
### 决策树AI：`solo/DecisionTree`
### 预测AI：`solo/Predictor`
### webpack封装js：`solo/dist`
### 数据：`solo/data`
#### 游戏操作数据：`solo/data/base`
#### 胜率数据：`solo/data/tree`
### 模型：`solo/data`
#### 决策树模型：`solo/modules/tree`
#### 多元线性回归模型：`solo/modules/predictor`
### UI：
#### 首页：`ui.html`
#### 散点图：`solo/charts.html`
#### 胜率预测：`solo/predictor.html`
#### 操作热力图：`solo/heatmap.html`
#### 多项式回归分析图：`solo/testCharts.html`
#### 相对平衡分析：`solo/modules/predictor/solve_data.html`
## 技术成员
#### 杨晓宇：编写游戏逻辑，完成所有AI的编写，生成决策树模型及多元线性回归模型，生成原始数据，完成胜率预测和热力图功能
#### 夏文奕：将原始数据处理成前端可以识别的格式，处理多项式回归方程，完成相对平衡分析功能
#### 丁宇晨：使用LayUI完成前端界面的拼接，使用拿到的数据展示散点图及多项式回归图
## 展示成员
#### 魏天舒：负责进行整体商业分析，完成相关调查，检索相关论文
#### 杨晓宇：进行项目整体设计，技术手段展示，项目演示
#### 李天舟：负责编辑PPT，阐述平衡的重要性
#### 丁宇晨：回答部分有关问题