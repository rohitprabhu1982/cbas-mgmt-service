/*
 * Copyright (C) Deloitte, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
package com.fda.ctp.exception;

//@Configuration
//@PropertySource({"classpath:exception/exceptionmap.properties"})
//@ComponentScan({"com.fda.ctp"})
public class ExceptionConfigMapping{

//    @Autowired
//    private Environment env;

//    @Bean
//    public ExceptionConfig exceptionConfig(){
//        Map<String, String> exceptionMap = getHeadingsFromProperties("exception.map");
//        return new ExceptionConfig(exceptionMap);
//    }
//
//    private Map<String, String> getHeadingsFromProperties(String propertyName){
//        Map<String, String> HeadingsMap = new HashMap<>();
//        String mapString = env.getProperty(propertyName);
//        String[] keyValues = mapString.split(",");
//        for( String kv : keyValues ){
//            String[] kvpair = kv.split(":");
//            HeadingsMap.put(kvpair[0].trim().toUpperCase(), kvpair[1]);
//        }
//        return HeadingsMap;
//    }
}