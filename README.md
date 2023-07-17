# Shawn

A website to assist in picking where to hang in tokyo

https://jonkenobi.github.io/shawn/





## How to deploy API 

`terraform init`  Pull the latest remote state
TODO add instructions

#### Todos
* Display area descriptions in UI, add it in API response
* Add more places; add more stuff related to food; add other attributes
* Improve css of attribute cards so it doesn't shake ; when all expansions are expanded, extend screen height for the bottom map components 
* In places db add attributes such as ethnic foods?
* Improve appearance of showing places in area-expansion-panel
* Find a way to auto add more areas instead of manually adding the latitude and longitude

Code is a mess >D<. just pushing the messy code for the functionality. So want to rewrite it..

Note
No need to redploy API for adding attributes to response model
Can just alter the lambda to return more attributes from DynamoDB




