# IFrame
React Frame loader component allows you to load external webpages in your web application.
In addition to just add webpages it provides choice to add loading animations till the time imported webpage loads in your webpage.

# Installation
Install this component by running 'npm install iFrameLoader' or 'yarn add iFrameLoader' .
Dont forgot to install 'react-loading' component by running command as 'npm install react-loading'.

# Usage

To use this component in your application, simply import this components by adding :
import iFrameLoader from 'iFrameLoader'

# Example

        <Iframe
          url="http://www.youtube.com/embed/1-xGerv5FOk"
          width="550px"
          height="550px"
          position="absolute"
          display="block"
          showLoading={true}
          loadingPattern='spokes'
          showBorder={true}
        />
   

