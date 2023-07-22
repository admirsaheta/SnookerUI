/**
 * 
 * Created by Admir Saheta <admirxsaheta@gmail.com>
 * Environment Variable Backport 
 * 
 *  */ 

import React, { createContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { WithChildren } from '../../utilities/ModifiersBackport';

type EnvironmentOptions = {
    colorScheme: 'light' | 'dark',
    locale: string,
}

type EnvironmentContext = {
    colorScheme: EnvironmentOptions['colorScheme'];
    locale: EnvironmentOptions['locale'];
    setValues: (values: Partial<EnvironmentOptions>) => void;
  } | null;
  
  type EnvironmentProviderProps = WithChildren<
    Partial<{
      [K in keyof EnvironmentOptions]: EnvironmentOptions[K];
    }>
  >;
  
  export const EnvironmentProviderContext =
    createContext<EnvironmentContext>(null);
  
  export const EnvironmentProvider = ({
    colorScheme,
    locale,
    children,
  }: EnvironmentProviderProps) => {
    const systemColorScheme = useColorScheme();
    const colorSchemeValue = colorScheme || systemColorScheme || 'light';
    const localeValue = locale || 'en';
  
    const [envValues, setEnvValues] = useState<EnvironmentOptions>({
      colorScheme: colorSchemeValue,
      locale: localeValue,
    });
  
    const setValues = (newValues: Partial<EnvironmentOptions>) => {
      setEnvValues((prevEnvironment) => ({
        ...prevEnvironment,
        ...newValues,
      }));
    };
  
    return (
      <EnvironmentProviderContext.Provider
        value={{
          ...envValues,
          setValues,
        }}
      >
        {children}
      </EnvironmentProviderContext.Provider>
    );
  };
  