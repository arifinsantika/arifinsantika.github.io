/**
 * Template Name: Bocor - v2.0.0
 * Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
    "use strict";

    // datatable init
    // Setup - add a text input to each footer cell
    $('#product-table tfoot th').each(function (i) {
        if ([0, 1, 10].indexOf(i) === -1) {
            var title = $('#example thead th').eq($(this).index()).text();
            $(this).html('<input type="text" class="form-control" placeholder="Search ' + title + '" data-index="' + i + '" />');
        }
    });
    let productDataTable = $('#product-table').DataTable({
        "scrollX": true,
        "columns": [
            {"orderable": true, "searchable": true},
            {"orderable": false, "searchable": false},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
            {"orderable": true, "searchable": true},
        ]
    });
    // Filter event handler
    $(productDataTable.table().container()).on('keyup', 'tfoot input', function () {
        productDataTable
            .column($(this).data('index'))
            .search(this.value)
            .draw();
    });

    // image enlarge inside modal
    $(document).on('click', 'img.enlarge', function (e) {
        e.preventDefault();

        let imageSrc = $(this).attr('src');
        let imageAlt = $(this).attr('alt');
        let $modal = $('#modal-image');

        $modal.find('.modal-title').html(imageAlt);
        $modal.find('.modal-body').html(`<img src="${imageSrc}">`);
        $modal.modal('show');
    });

    // product detail inside modal
    $(document).on('click', 'button.view-product-detail', function (e) {
        e.preventDefault();

        let target = $(this).attr('data-target');
        let targetDetailHTML = $(target).html();
        let alt = $(this).attr('data-alt');
        let $modal = $('#modal-detail-product');

        $modal.find('.modal-title').html(alt);
        $modal.find('.modal-body').html(targetDetailHTML);
        $modal.modal('show');
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $('.venobox').venobox();
        });
    });

    // Initi AOS
    AOS.init({
        duration: 800,
        easing: "ease-in-out"
    });

})(jQuery);