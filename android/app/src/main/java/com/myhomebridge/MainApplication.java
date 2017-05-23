package com.Wudo;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.facebook.react.ReactApplication;
import com.reactnativenavigation.NavigationApplication;

import java.util.List;
import java.util.Arrays;

public class MainApplication extends NavigationApplication implements ReactApplication {
     public boolean getUseDeveloperSupport() {
         return BuildConfig.DEBUG;
     }       

     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }  

    //  @Override
     protected List<ReactPackage> getPackages() {
         // Add additional packages you require here
         // No need to add RnnPackage and MainReactPackage
         return Arrays.<ReactPackage>asList(
             // eg. new VectorIconsPackage()
         );
     }

     @Override
     @Nullable
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }      
}
