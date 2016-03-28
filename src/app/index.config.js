(function() {
  'use strict';

  angular
    .module('dreamproject20')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;
      
      
      
      
      
        $translateProvider.translations('english', {
    HOME: 'Home',
    ABOUT: 'ABOUT',
    APP: 'App',
    LANGUAGE: '中文版',
    LOGIN: 'LOGIN TO RACING PRO',LOGINBUT:'Login',
    CONTACT: 'CONTACT',
    RUNNING:'PROJECT HAS BEEN RUNNING FOR',
    DAY:'days',
    SLIDE1:'Professional football analysis program',
    SLIDE2:'Data analysis of competition',
    SLIDE3:'Simple and easy to use',
    HOME_DESC:'Our company, DREAM PROJECT, has invested football matches for many years. Our company owns a very strong football matches database. What’s more, we hire specially-assigned persons to analyze each competition in order to make football matches becomes a professional investment with abundant profits.',
    ABOUT_CONTENT:'Our company, DREAM PROJECT, has invested football matches for many years. Our company owns a very strong football matches database. What’s more, we hire specially-assigned persons to analyze each competition in order to make football matches becomes a professional investment with abundant profits.  All football matches are calculated by the program and data. When the data meet the requirement, the program will provide some information for you to bet.Professional football program DREAM PROJECT collects one-off fee, and members may use it permanently. We provide independent entry account for each person.',
    ABOUT_GT1:'STRONG DATABASE',ABOUT_GT2:'AFTER-SALE SERVICE',ABOUT_GT3:'PROFESSIONAL ANALYSIS',
    ABOUT_GC1:'Our company owns football matches data for many years',
    ABOUT_GC2:'Answer all questions about the program and matches to members' ,
    ABOUT_GC3:'In order to improve the winning rate, specially-assigned persons analyze each match'   ,

    CONTACT_GT1:'PROFESSIONAL FOOTBALL PROGRAM',CONTACT_GT2:'TEL. (WHATSAPP)',CONTACT_GT3:'ACCOUNT IN HONG KONG',CONTACT_GT4:'ACCOUNT IN MACAU',
    CONTACT_GC1:'(Computer / smart phone / tablet PC)<br>Price: $7,000<br>(One-off charge and permanent use)<br>',
    CONTACT_GC2:'+852 5663 2361 <br>',
    CONTACT_GC3:' Hang Seng Bank:  209-441542-668<br> Bank of China: 012-35510088660<br>Hong Kong Jockey Club: 13830359<br><br>',
    CONTACT_GC4:'Bank of China in Macau: 010-110409-370',
    TERMS:'Terms',
    TERMS_TITLE:'TERMS AND CONDITIONS FOR SERVICES PROVIDED BY  RACING PRO',
    APP_LOADING:'Loading race data , please wait ...',
    APP_NO_DATA_TITLE:'The Data be available on:',
    APP_NO_DATA_CONTENT:' Mondays (for Wednesday meetings except special race meetings) <br>Thursdays (for Saturday or Sunday meetings except special race meetings).',
    APP_GET_SCORE:"SCORE",
    APP_ANALYZING:"Anylyzing...",
    APP_SELECT_RACE:"Please select a race",
    APP_NO_DATA:"Sorry ! Could not get any data yet. Please come back later",
    APP_NOTBUY:"DON'T BUY",
    RECONMMENDED:'Recommended team : {{team}}(handicap)',
    HANDICAP:'(handicap)',
   MOREDATA:'Loading More Data...',
    TUTORIAL_TITLE:'TUTORIAL',
            takepicture:'*Please take the photo of receipt and send it to our company',
            APP_LOGIN:'Please log in to see the result',
            APP_LOGGING_IN:'Loggin into your account, please wait...',
            APP_LOGIN_FAILED:'Incorrect ID or password!'



  });
  $translateProvider.translations('chinese', {
     HOME: '首頁',
    ABOUT: '關於我們',
    APP: '程式使用',
      LANGUAGE:'English',
      LOGIN: '登入 RACING PRO',LOGINBUT:'登入',
    CONTACT: '聯絡我們',
      RUNNING:'本項目已運作',
      DAY:'日',
    SLIDE1:'專業足球數據分析項目',
    SLIDE2:'Data analysis of competition',
    SLIDE3:'Simple and easy to use',
      HOME_DESC:'本公司 DREAM PROJECT 多年來鑽研足球賽事, 公司擁有超強大足球賽事數據庫,更有專人分析每場賽事, 令到足球變成一項專業而帶有豐厚利益的投資.',
    ABOUT_CONTENT:"本公司 DREAM PROJECT 多年來鑽研足球賽事, 公司擁有超強大足球賽事數據庫,更有專人分析每場賽事, 令到足球變成一項專業而帶有豐厚利益的投資.所有足球賽事用程式及數據計算,當數據達到要求就可以投注賽事.DREAM PROJECT專業足球程式一次性收費,永久使用,所有會員設有獨立登入户口.",
       ABOUT_GT1:'強大數據庫',ABOUT_GT2:'售後服務',ABOUT_GT3:'專業分析',
    ABOUT_GC1:'本公司擁有多年來足球數據',
    ABOUT_GC2:'解答會員所有程式或賽事問題' ,
    ABOUT_GC3:'專人分析每場賽事,令到勝率大大提高',
    TERMS:'服務條款',
      TERMS_TITLE:'「RACING PRO」服務條款',

      CONTACT_GT1:'DREAM PROJECT 專業足球程式',CONTACT_GT2:'電話. (WHATSAPP)',CONTACT_GT3:'香港區户口',CONTACT_GT4:'澳門區户口',
    CONTACT_GC1:'(電腦 / 手機 / 平板電腦使用)<br>價格 : $7,000<br>(一次性收費,永久使用)<br>',
    CONTACT_GC2:'+852 5663 2361 <br>',
    CONTACT_GC3:' 恆生銀行 :  209-441542-668<br> 中國銀行 : 012-35510088660<br>香港賽馬會戶口 : 13830359<br><br>',
    CONTACT_GC4:'澳門中國銀行 : 010-110409-370',
    APP_LOADING:'正在加載數據，請稍後......',
    APP_NO_DATA_TITLE:'The Data be available on:',
    APP_NO_DATA_CONTENT:' Mondays (for Wednesday meetings except special race meetings) <br>Thursdays (for Saturday or Sunday meetings except special race meetings).' ,
      APP_GET_SCORE:"分析",
    APP_ANALYZING:"正在分析數據...",
    APP_SELECT_RACE:"請選擇賽事",
    APP_NO_DATA:"暫未能提供賽事分析結果，請稍後再試",
      APP_NOTBUY:"不建議投注",
    RECONMMENDED:'建議投注 : {{team}}(讓球)',
    HANDICAP:'(讓球)',
    MOREDATA:'加載更多數據中...',
      TUTORIAL:'程式教學',
    TUTORIAL_TITLE:'程式教學',
      takepicture:'*入數後請拍照收據',
      APP_LOGIN:'請先登入戶口',
            APP_LOGGING_IN:'正在登入，請稍後...',
      APP_LOGIN_FAILED:'ID或密碼錯誤!'

  });
  $translateProvider.preferredLanguage('chinese');
      
  }

})();
