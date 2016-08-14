// ==UserScript==
// @name         Odkaz na Uložto.cz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.csfd.cz/film/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var namesHeadings = document.getElementsByClassName("names")[0].getElementsByTagName("H3");
    for(var i=0;i< namesHeadings.length;i++)
    {
        namesHeadings[i].outerHTML = "<a href=\"https://ulozto.cz/hledej?q=" + namesHeadings[i].textContent + "\"><H3>" + namesHeadings[i].textContent + "</a></H3>";
    }
})();