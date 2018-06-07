var DatatableRemoteAjaxDemo= {
    init:function() {
        var t;
        t=$(".m_datatable").mDatatable( {
            data: {
                type:"remote", source: {
                    read: {
                        url:"https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php", map:function(t) {
                            var e=t;
                            return void 0!==t.data&&(e=t.data), e
                        }
                    }
                }
                , pageSize:10, serverPaging:!0, serverFiltering:!0, serverSorting:!0
            }
            , layout: {
                scroll: !1, footer: !1
            }
            , sortable:!0, pagination:!0, toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            }
            , search: {
                input: $("#generalSearch")
            }
            , columns:[ {
                field: "id", title: "#", sortable: !1, width: 40, selector: !1, textAlign: "center"
            }
            , {
                field:"name", title:"Name", filterable:!1, width:250
            }
            , {
                field:"date", title:"Date", width:100
            }
            , {
                field: "activity", title: "Activity", width: 300
            }
            , {
                field: "role", title: "Role", width: 100
            }
            , {
                field:"Actions", width:80, title:"Actions", sortable:!1, overflow:"visible", template:function(t, e, a) {
                    return'\t\t\t\t\t\t<div class="dropdown '+(a.getPageSize()-e<=4?"dropup": "")+'">\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }
            ]
        }
        ),
        $("#m_form_status").on("change", function() {
            t.search($(this).val(), "role")
        }
        ),
        $("#m_form_type").on("change", function() {
            t.search($(this).val(), "Type")
        }
        ),
        $("#m_form_status, #m_form_type").selectpicker()
    }
}

;
jQuery(document).ready(function() {
    DatatableRemoteAjaxDemo.init()
}

);