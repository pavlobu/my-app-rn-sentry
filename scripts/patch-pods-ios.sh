sed -i '' 's/node->getLayout().hadOverflow() |/node->getLayout().hadOverflow() ||/g' ./node_modules/react-native/ReactCommon/yoga/yoga/Yoga.cpp
