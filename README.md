This project aims to predict various pharmacokinetic properties using a set of machine learning models based on topological descriptors. The properties predicted are molecular features that are crucial in understanding the pharmacokinetics of a compound, which include:

ndonr: Number of hydrogen bond donors
naccr: Number of hydrogen bond acceptors
nrot: Number of rotatable bonds
Wmol: Molecular weight
PSA: Polar surface area
nring: Number of rings
nhet: Number of heteroatoms
Vmc: Molar volume
Models Used and Performance Metrics
Nine different models were employed to predict these properties, each evaluated based on the R-squared score and Root Mean Square Error (RMSE). Below is a summary of the performance of each model:

**XGBRegressor**
R-squared Score: 0.9363
RMSE: 9.2440

**Basic Neural Network (NN)
**R-squared Score: 0.9509
RMSE: 7.9757

**AdaBoost**
R-squared Score: 0.9192
RMSE: 11.6024

**K-Nearest Neighbors Regressor
**R-squared Score: 0.8470
RMSE: 19.2363

**Lasso Regressor
**R-squared Score: 0.9475
RMSE: 2.7539

**Ridge Regressor
**R-squared Score: 0.9818
RMSE: 2.2016

**Linear Regression
**R-squared Score: 0.9832
RMSE: 1.6139

**Decision Tree Regressor
**R-squared Score: 0.8912
RMSE: 12.7918

**Summary:
**Among the models used, Linear Regression demonstrated the highest accuracy with an R-squared score of 0.9832 and the lowest RMSE of 1.6139. This suggests that linear regression is the most effective model for predicting the pharmacokinetic properties in this dataset based on topological descriptors. However, other models such as Ridge Regressor and Lasso Regressor also performed well, indicating their potential utility in similar predictive tasks.

This README provides an overview of the models and their performance metrics to help you understand the relative effectiveness of each model in predicting pharmacokinetic properties based on topological descriptors.
