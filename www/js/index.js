/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var chaveApi = "113cf34e1158e122e83731473d04dfd6";
var secretoApi = "b21a823b896d290b342aa61a7c4c8d23";

var strServer = "http://" + "primearcee.solohapp.com";

//var appCateg = window.localStorage.getItem("imotoCateg");
//var appCategUpd = window.localStorage.getItem("imotoCategUpd");

function showAppMsg(Message){
    if($("#ActivityIndicator").length) {
        $("#ActivityIndicator").show();
    } else {
        $("body").prepend('<div id="ActivityIndicator"><div id="dvAppMsg"><span id="appMsg"></span></div></div>');
    }
    if($("#spinner").length) {
        $("#spinner").show();
    } else {
        $("body").prepend('<img id="spinner" src="./img/moto.png" />');
    }
    $("#appMsg").text(Message);
}

function showAppIcon(){
    if($("#spinner").length) {
        $("#spinner").show();
    } else {
        $("body").prepend('<img id="spinner" src="./img/moto.png" />');
    }
}

function showhidemenu(){
    //if($("#CategoriesMenu").css('display') == 'none') {
    //    $("#CategoriesMenu").show(350);
    //} else {
    //    $("#CategoriesMenu").hide(350);
    //}
    //alert($("#CategoriesMenu").css('right') + '/' + $(window).width());
    if($("#CategoriesMenu").css('right') == ($(window).width() + 'px')) {
        $("#CategoriesMenu").animate({ right: '0' }, 'slow');
    } else {
        $("#CategoriesMenu").animate({ right: '100%' }, 'slow');
    }
}

function showhidemenuitem(idCateg){
    if($("#item" + idCateg).css('display') == 'none') {
        $("#item" + idCateg).show(350);
    } else {
        $("#item" + idCateg).hide(350);
    }
}

function hideAppMsg(){
    $("#spinner").hide();
    $("#ActivityIndicator").hide();
}

function hideAppIcon(){
    $("#spinner").hide();
}

function iniciaApp(){
    if(window.localStorage.getItem("imotoCateg")==null){
        loadCategories();
    } else {
        if(window.localStorage.getItem("imotoCateg").length==0){
            loadCategories();
        } else {
            if(window.localStorage.getItem("imotoCategUpd")==null){
                loadCategories();
            } else {
                //
                startMenu(JSON.parse(window.localStorage.getItem("imotoCateg")));
            }
        }
    }
}

/*function loadCategories(){
    showAppMsg('Carregando App');
    var urlServer = strServer + "/categories.php";
    $.getJSON(urlServer, function(result){
        window.setTimeout(function() {
            hideAppMsg();
            window.localStorage.setItem("imotoCateg", JSON.stringify(result));
            startMenu(result);
        }, 500);
    }).error(function(err) {
        hideAppMsg();
        alert("Não foi possível realizar a conexão com o Banco de Dados: " + err);
        //navigator.notification.alert("Não foi possível realizar a conexão com o Banco de Dados: " + err, alertDismissed, '', 'Ok');
    }).done(function() {
        //
    });
}*/

function startMenu(objCateg){
    $.each(objCateg.info, function(i, dados){
        var categ = JSON.parse(dados);
        //alert(categ.IdCat);
        if(categ.IdCatPai==2){
            var tblRow = '<a class="list-group-item list-group-item-action flex-column align-items-start bg-light p4 text-dark h5 border-0" onclick="showhidemenuitem(' + categ.IdCat + ')">' + categ.Categoria + '</a><div class="list-group bg-secondary" id="item' + categ.IdCat + '" style="display: none;"></div>';
            $(tblRow).appendTo("#menuInicio");
        }
    });
    $.each(objCateg.info, function(i, dados){
        var categ = JSON.parse(dados);
        if(categ.IdCatPai>2){
            var tblSub = '<a class="list-group-item list-group-item-action flex-column align-items-start bg-secondary p4 text-dark h5 border-0" href="category.html?tipo=2&idCtg=' + categ.IdCat + '">' + categ.Categoria + '</a>';
            $(tblSub).appendTo("#item" + categ.IdCatPai);
        }
    });
}

function startMenuAntigo(objCateg){
    //navigator.notification.alert(objCateg.length, alertDismissed, '', 'Ok');
    if(objCateg.children[0].level == 1){
        $.each(objCateg.children[0].children, function(i, categ){
            if(categ.level==2){
                //alert(categ.category_id + ' ' + categ.name);
                var strChild = '';
                if(categ.children.length>0){
                    strChild = categ.children.length + ' filhos'
                }
                var tblRow = '<a class="list-group-item list-group-item-action flex-column align-items-start bg-dark p4 text-muted h5 border-0" onclick="showhidemenuitem(' + categ.category_id + ')">' + categ.name + '</a>';
                $(tblRow).appendTo("#menuInicio");
                if(categ.children.length>0){
                    var tblSub = '<div class="list-group bg-secondary" id="item' + categ.category_id + '" style="display: none;">';
                    $.each(categ.children, function(i, filho){
                        tblSub = tblSub + '<a class="list-group-item list-group-item-action flex-column align-items-start bg-secondary p4 text-dark h5 border-0" href="subcategory.html?idCtg=' + filho.category_id + '">' + filho.name + '</a>';
                    });
                    tblSub = tblSub + '</div>';
                    $(tblSub).appendTo("#menuInicio");
                }
            }
        });
    }
}

function toBRL(valor){
    var strValor = valor.replace('.', ',');
    if(Number(valor)>=1000000000.00){
        strValor = strValor.substr(0, 1) + '.' + strValor.substr(4, 3) + '.' + strValor.substr(7,3) + '.' + strValor.substr(10);
    } else {
        if(Number(valor)>=100000000.00){
            strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3) + '.' + strValor.substr(6);
        } else {
            if(Number(valor)>=10000000.00){
                strValor = strValor.substr(0, 2) + '.' + strValor.substr(2, 3) + '.' + strValor.substr(5);
            } else {
                if(Number(valor)>=1000000.00){
                    strValor = strValor.substr(0, 1) + '.' + strValor.substr(1, 3) + '.' + strValor.substr(4);
                } else {
                    if(Number(valor)>=100000.00){
                        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3);
                    } else {
                        if(Number(valor)>=10000.00){
                            strValor = strValor.substr(0, 2) + '.' + strValor.substr(2);
                        } else {
                            if(Number(valor)>=1000.00){
                                strValor = strValor.substr(0, 1) + '.' + strValor.substr(1);
                            }
                        }
                    }
                }
            }
        }
    }
    strValor = 'R$ ' + strValor;
    return strValor
}

function toPtBr(valor){
    var strValor = valor.replace('.', ',');
    if(Number(valor)>=1000000000.00){
        strValor = strValor.substr(0, 1) + '.' + strValor.substr(4, 3) + '.' + strValor.substr(7,3) + '.' + strValor.substr(10);
    } else {
        if(Number(valor)>=100000000.00){
            strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3) + '.' + strValor.substr(6);
        } else {
            if(Number(valor)>=10000000.00){
                strValor = strValor.substr(0, 2) + '.' + strValor.substr(2, 3) + '.' + strValor.substr(5);
            } else {
                if(Number(valor)>=1000000.00){
                    strValor = strValor.substr(0, 1) + '.' + strValor.substr(1, 3) + '.' + strValor.substr(4);
                } else {
                    if(Number(valor)>=100000.00){
                        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3);
                    } else {
                        if(Number(valor)>=10000.00){
                            strValor = strValor.substr(0, 2) + '.' + strValor.substr(2);
                        } else {
                            if(Number(valor)>=1000.00){
                                strValor = strValor.substr(0, 1) + '.' + strValor.substr(1);
                            }
                        }
                    }
                }
            }
        }
    }
    return strValor
}

function toDate(str){
    var strAno = str.split(" ")[0].split("-")[0];
    var strMes = str.split(" ")[0].split("-")[1];
    var strDia = str.split(" ")[0].split("-")[2];
    return  strDia + "/" + strMes + "/" + strAno;
}

function toDateTime(str){
    var strAno = str.split(" ")[0].split("-")[0];
    var strMes = str.split(" ")[0].split("-")[1];
    var strDia = str.split(" ")[0].split("-")[2];
    var strHorario = str.split(" ")[1];
    return  strDia + "/" + strMes + "/" + strAno + " " + strHorario;
}

function searchProd(){
    var txSearch = $('#txPesquisa').val().replace(/\s+/g, '_');
    if(txSearch.length>=3){
        window.location = './search.html?strSearch=' + txSearch;
    }
}