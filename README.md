## Code Challenge for Vodafone, written in ReactNative.

## To run the application : 
1- `npm run start / yarn start`

2- `yarn ios`

##To run the test:  
1- Make sure all the requirements are met in your local, based on Detox official docs  https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md

2- `yarn build`

3- `yarn test`


##Assumptions: 

1- I Downloaded the images from the sustainabledevelopment.un.org website, instead of using other icons

2- I assumed for this very simple app I would not need to use a separate Grid library, but if the project has a potentiality that it will grow, creating or using a third party Grid library would be desired

3- To choose the right library for navigation, there are many things to consider, but in the absence of enough time, below is my findings: 


###`React Navigation`


####Pros :
 
* 18k stars
* Easier to use
* Less native bugs
* Pushed by Facebook, backed by community
* Easier to implement for smaller project
* With the recent gesture and screen libraries, performance is near native.

####Cons : 

* Possibility of performance issues 
* Depending on lots of other third parties 
* Uses more JS thread 
* If Swift or Android introduces new navigation gestures, RN needs to simulate a JS version



###`React Native Navigation` 


####Pros:

* 11k stars
* 100% native , means a better performance by default
* Backed by WIX
* If Swift or Android introduces new navigation gestures, RNN catches up fast


####Cons : 

* Possibility of spending time on native issues
* Possible difficulty of sharing state between screens, because each screen has a new app-root. 



## TBC :

1- I would need more time to find the right font that matches the design

2- For some reason, my last test which is tapping on the tiles did not work. There might be some issues between Detox and React-Navigation. I would investigate and figure it out if I had a little bit more time.
  



