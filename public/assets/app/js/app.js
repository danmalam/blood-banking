var Main = {
    donation: function () {
        var t;
        t = $("#donor_data").mDatatable({
            data: {
                type: "remote", source: {
                    read: {
                        url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php", map: function (t) {
                            var e = t;
                            return void 0 !== t.data && (e = t.data), e
                        }
                    }
                }
                , pageSize: 10, serverPaging: !0, serverFiltering: !0, serverSorting: !0
            }
            , layout: {
                scroll: !1, footer: !1
            }
            , sortable: !0, pagination: !0, toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            }
            , search: {
                input: $("#generalSearch")
            }
            , columns: [{
                field: "id", title: "#", sortable: !1, width: 40, selector: !1, textAlign: "center"
            }
                , {
                field: "name", title: "Name", filterable: !1, width: 250, textAlign: "center"
            }
                , {
                field: "age", title: "Age", width: 100, textAlign: "center"
            }
                , {
                field: "sex", title: "Sex", width: 100, textAlign: "center"
            }
                , {
                field: "mobile", title: "Mobile No", width: 150, textAlign: "center"
            }
                , {
                field: "home", title: "Home No", width: 150, textAlign: "center"
            }
                , {
                field: "address", title: "Address", width: 200, textAlign: "center"
            }
                , {
                field: "blood_group", title: "Blood Group", width: 100, textAlign: "center"
            }
                , {
                field: "bag", title: "Bag No", width: 100, textAlign: "center"
            }
            , {
                field: "date", title: "Date", width: 100, textAlign: "center"
            }
                , {
                field: "status", title: "Status", width: 150, textAlign: "center"
            }
                , {
                field: "reason", title: "Reason", width: 200, textAlign: "center"
            }
                , {
                field: "Actions", width: 150, title: "Actions", textAlign: "center", sortable: !1, overflow: "visible", template: function (t, e, a) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\t\t\t\t\t\t\t<i class="la la-eye"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }
            ]
        }
        ),
            $("#m_form_status").on("change", function () {
                t.search($(this).val(), "status")
            }
            ),
            $("#m_form_type").on("change", function () {
                t.search($(this).val(), "Type")
            }
            ),
            $("#m_form_status, #m_form_type").selectpicker()
    },
    bags: function () {
        var t;
        t = $("#bags_data").mDatatable({
            data: {
                type: "remote", source: {
                    read: {
                        url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php", map: function (t) {
                            var e = t;
                            return void 0 !== t.data && (e = t.data), e
                        }
                    }
                }
                , pageSize: 10, serverPaging: !0, serverFiltering: !0, serverSorting: !0
            }
            , layout: {
                scroll: !1, footer: !1
            }
            , sortable: !0, pagination: !0, toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            }
            , search: {
                input: $("#generalSearch")
            }
            , columns: [{
                field: "id", title: "#", sortable: !1, width: 40, selector: !1, textAlign: "center"
            }
                , {
                field: "bag_no", title: "Bag No", filterable: !1, width: 100, textAlign: "center"
            }
                , {
                field: "blood_group", title: "Blood Group", width: 100, textAlign: "center"
            }
                , {
                field: "donor", title: "Donor Name", width: 200, textAlign: "center"
            }
                , {
                field: "date", title: "Stored Date", width: 150, textAlign: "center"
            }
                , {
                field: "status", title: "Status", width: 150, textAlign: "center"
            }
                , {
                field: "Actions", width: 150, title: "Actions", textAlign: "center", sortable: !1, overflow: "visible", template: function (t, e, a) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\t\t\t\t\t\t\t<i class="la la-eye"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }
            ]
        }
        ),
            $("#m_form_status").on("change", function () {
                t.search($(this).val(), "status")
            }
            ),
            $("#m_form_type").on("change", function () {
                t.search($(this).val(), "Type")
            }
            ),
            $("#m_form_status, #m_form_type").selectpicker()
    },
    rejectedBags: function () {
        var t;
        t = $("#reject_bags").mDatatable({
            data: {
                type: "remote", source: {
                    read: {
                        url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php", map: function (t) {
                            var e = t;
                            return void 0 !== t.data && (e = t.data), e
                        }
                    }
                }
                , pageSize: 10, serverPaging: !0, serverFiltering: !0, serverSorting: !0
            }
            , layout: {
                scroll: !1, footer: !1
            }
            , sortable: !0, pagination: !0, toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            }
            , search: {
                input: $("#generalSearch")
            }
            , columns: [{
                field: "id", title: "#", sortable: !1, width: 40, selector: !1, textAlign: "center"
            }
                , {
                field: "bag_no", title: "Bag No", filterable: !1, width: 100, textAlign: "center"
            }
                , {
                field: "blood_group", title: "Blood Group", width: 100, textAlign: "center"
            }
                , {
                field: "donor", title: "Donor Name", width: 200, textAlign: "center"
            }
                , {
                field: "date", title: "Rejected Date", width: 150, textAlign: "center"
            }
                , {
                field: "reason", title: "Reason", width: 250, textAlign: "center"
            }
                , {
                field: "Actions", width: 150, title: "Actions", textAlign: "center", sortable: !1, overflow: "visible", template: function (t, e, a) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\t\t\t\t\t\t\t<i class="la la-eye"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }
            ]
        }
        ),
            $("#m_form_status").on("change", function () {
                t.search($(this).val(), "status")
            }
            ),
            $("#m_form_type").on("change", function () {
                t.search($(this).val(), "Type")
            }
            ),
            $("#m_form_status, #m_form_type").selectpicker()
    },
    requestList: function () {
        var t;
        t = $("#request_data").mDatatable({
            data: {
                type: "remote", source: {
                    read: {
                        url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php", map: function (t) {
                            var e = t;
                            return void 0 !== t.data && (e = t.data), e
                        }
                    }
                }
                , pageSize: 10, serverPaging: !0, serverFiltering: !0, serverSorting: !0
            }
            , layout: {
                scroll: !1, footer: !1
            }
            , sortable: !0, pagination: !0, toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            }
            , search: {
                input: $("#generalSearch")
            }
            , columns: [{
                field: "id", title: "#", sortable: !1, width: 40, selector: !1, textAlign: "center"
            }
                , {
                field: "patient", title: "Patient Name", filterable: !1, width: 250, textAlign: "center"
            }
                , {
                field: "sex", title: "Sex", width: 100, textAlign: "center"
            }
                , {
                field: "mobile", title: "Mobile No", width: 100, textAlign: "center"
            },
                , {
                field: "address", title: "Address", width: 150, textAlign: "center"
            }
                , {
                field: "bags", title: "How Many Bags", width: 100, textAlign: "center"
            }
                , {
                field: "component", title: "Blood Component", width: 250, textAlign: "center"
            }
                , {
                field: "blood_group", title: "Blood Group", width: 100, textAlign: "center"
            }
                , {
                field: "consultant", title: "Consultant Name", width: 200, textAlign: "center"
            }
            , {
                field: "date", title: "Request Date", width: 100, textAlign: "center"
            }
                , {
                field: "reason", title: "Reason for Transfusion", width: 250, textAlign: "center"
            }
                , {
                field: "Actions", width: 150, title: "Actions", textAlign: "center", sortable: !1, overflow: "visible", template: function (t, e, a) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\t\t\t\t\t\t\t<i class="la la-eye"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }
            ]
        }
        ),
            $("#m_form_status").on("change", function () {
                t.search($(this).val(), "status")
            }
            ),
            $("#m_form_type").on("change", function () {
                t.search($(this).val(), "Type")
            }
            ),
            $("#m_form_status, #m_form_type").selectpicker()
    },
    patientList: function () {
        var t;
        t = $("#patient_data").mDatatable({
            data: {
                type: "remote", source: {
                    read: {
                        url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php", map: function (t) {
                            var e = t;
                            return void 0 !== t.data && (e = t.data), e
                        }
                    }
                }
                , pageSize: 10, serverPaging: !0, serverFiltering: !0, serverSorting: !0
            }
            , layout: {
                scroll: !1, footer: !1
            }
            , sortable: !0, pagination: !0, toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            }
            , search: {
                input: $("#generalSearch")
            }
            , columns: [{
                field: "id", title: "#", sortable: !1, width: 40, selector: !1, textAlign: "center"
            }
                , {
                field: "name", title: "Name", filterable: !1, width: 250, textAlign: "center"
            }
                , {
                field: "age", title: "Age", width: 100, textAlign: "center"
            }
                , {
                field: "sex", title: "Sex", width: 100, textAlign: "center"
            }
                , {
                field: "department", title: "Department", width: 150, textAlign: "center"
            }
                , {
                field: "mobile", title: "Mobile No", width: 150, textAlign: "center"
            }
                , {
                field: "condition", title: "Condition", width: 150, textAlign: "center"
            }
                , {
                field: "Actions", width: 150, title: "Actions", textAlign: "center", sortable: !1, overflow: "visible", template: function (t, e, a) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\t\t\t\t\t\t\t<i class="la la-eye"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }
            ]
        }
        ),
            $("#m_form_status").on("change", function () {
                t.search($(this).val(), "status")
            }
            ),
            $("#m_form_type").on("change", function () {
                t.search($(this).val(), "Type")
            }
            ),
            $("#m_form_status, #m_form_type").selectpicker()
    },
    campsList: function () {
        var t;
        t = $("#camps_data").mDatatable({
            data: {
                type: "remote", source: {
                    read: {
                        url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php", map: function (t) {
                            var e = t;
                            return void 0 !== t.data && (e = t.data), e
                        }
                    }
                }
                , pageSize: 10, serverPaging: !0, serverFiltering: !0, serverSorting: !0
            }
            , layout: {
                scroll: !1, footer: !1
            }
            , sortable: !0, pagination: !0, toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            }
            , search: {
                input: $("#generalSearch")
            }
            , columns: [{
                field: "id", title: "#", sortable: !1, width: 40, selector: !1, textAlign: "center"
            }
                , {
                field: "name", title: "Name", filterable: !1, width: 250, textAlign: "center"
            }
                , {
                field: "age", title: "Age", width: 100, textAlign: "center"
            }
                , {
                field: "sex", title: "Sex", width: 100, textAlign: "center"
            }
                , {
                field: "department", title: "Department", width: 150, textAlign: "center"
            }
                , {
                field: "mobile", title: "Mobile No", width: 150, textAlign: "center"
            }
                , {
                field: "condition", title: "Condition", width: 150, textAlign: "center"
            }
                , {
                field: "Actions", width: 150, title: "Actions", textAlign: "center", sortable: !1, overflow: "visible", template: function (t, e, a) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\t\t\t\t\t\t\t<i class="la la-eye"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }
            ]
        }
        ),
            $("#m_form_status").on("change", function () {
                t.search($(this).val(), "status")
            }
            ),
            $("#m_form_type").on("change", function () {
                t.search($(this).val(), "Type")
            }
            ),
            $("#m_form_status, #m_form_type").selectpicker()
    },
    stored: function () {

        $('#component').on('change', function () {

            var values = $(this).val()
            var div = document.createElement('div')
            var parent = $('#component_parent')
            for (let i = 1; i < values.length; i++) {
                $('.value').remove()
                div.className = 'form-group m-form__group row value'
                var col = document.createElement('div')
                col.className = 'col-lg-4'
                var select = document.createElement('select')
                var label = document.createElement('label')
                label.innerHTML = values[i]
                select.className = 'form-control m-input'
                select.name = 'component[]'
                select.innerHTML = '<option class="m--hide" selected>How many ' + values[i] + ' you want to stored</option>'
                for (let j = 1; j <= 10; j++) {
                    var option = document.createElement('option')
                    option.textContent = j
                    option.value = j
                    select.append(option)
                }
                col.append(label)
                col.append(select)
                div.append(col)
                parent.append(div)
            }
        })

    },
    checkExistPatient: function () {
        $('#exist_parent').click(function () {
            if ($(this).prop("checked") == true) {
                $('#exist_patient_hide').fadeOut(1000).addClass('m--hide')
                $('#exist_patient_show').fadeIn(1000).removeClass('m--hide')
            }
            else if ($(this).prop("checked") == false) {
                $('#exist_patient_show').addClass('m--hide').fadeOut(1000)
                $('#exist_patient_hide').removeClass('m--hide').fadeIn(1000)
            }
        });
    }
};

jQuery(document).ready(function () {
    Main.donation();
    Main.bags();
    Main.rejectedBags();
    Main.requestList();
    Main.stored();
    Main.patientList();
    Main.checkExistPatient();

});