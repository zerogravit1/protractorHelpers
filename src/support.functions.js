'use strict';

var SupportFunctions = ( function() {
  SupportFunctions.prototype =  {
    /**
     * el: element reference found on page
     * maxLength: max length of input field
     */
    boundaryTest: function( el, maxLength ) {
      el.sendKeys( this.randomString( maxLength ) );
    },

    /**
     * el: element reference found on page
     */
    getPH: function( el ) {
      return el.getAttribute( 'placeholder'  );
    },

    /**
     * el: element reference found on page
     */
    getValue: function( el )  {
      return el.getAttribute( 'value' );
    },

    randomNumber: function( low, high ) {
      var min = Math.ceil( low );
      var max = Math.floor( high );

      return Math.floor( Math.random() * ( max - min ) ) + min;
    },

    randomString: function( maxLength ) {
      var possible = 'ABCDEFGHIJKLMNOPQRSSSSSSSSSTUVWXYZabcdefghijklmmnopqqrstuvwxyz1234567890',
          text     = '';

      for ( var i = 0; i < maxLength; ++i ) {
        text += possible.charAt( Math.floor( Math.random() * possible.length ) );
      }

      return text;
    },

    // Excepted Conditions Handlers
    waitAndClick: function( el ) {
      var EC          = protractor.ExpectedConditions,
          isClickable = EC.elementToBeClickable( el );

      browser.wait( isClickable, 5000 );
      el.click();
    },

    waitForInvisible: function( el ) {
      var EC          = protractor.ExpectedConditions,
          isInvisible = EC.invisibilityOf( el );

      browser.wait( isInvisible, 5000 );
    },

    waitForPresence: function( el ) {
      var EC        = protractor.ExpectedConditions,
          isPresent = EC.presenceOf( el );

      browser.wait( isPresent, 5000 );
    },

    waitForTextChange: function( el, text ) {
      var EC        = protractor.ExpectedConditions,
          isChanged = EC.textToBePresentInElement( el, text );

      browser.wait( isChanged, 5000 );
    },

    waitForURLChange: function( urlToBe ) {
      var EC = protractor.ExpectedConditions;

      browser.wait( EC.urlContains( urlToBe ), 5000 );
    },

    waitForVisible: function( el ) {
      var EC        = protractor.ExpectedConditions,
          isVisible = EC.visibilityOf( el );

      browser.wait( isVisible, 5000 );
    }
  };

  return SupportFunctions;
} )();

module.exports =  new SupportFunctions();
