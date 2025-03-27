// Pricing Constants
const PRICES = {
    carpet: {
        westminster: 190, // Soft
        ultraSoft: 280,
        textured: 100,
        pattern: 145
    },
    trim: {
        overlocking: 35,
        overlockingRound: 90,
        ribbon: 155
    },
    handling: {
        square: 300,
        round: 390,
        default: 0
    },
    markup: {
        standard: 1.8,
        pattern: 2
    },
    vat: 1.15
};

// Global State
const state = {
    dimensions: {
        widthCm: 0,
        lengthCm: 0,
        diameterCm: 0
    },
    selections: {
        colour: '',
        edging: '',
        pattern: null
    },
    firstSelections: {
        soft: false,
        ultraSoft: false,
        textured: false,
        pattern: false
    },
    overlays: {
        pattern: 0,
        minimat: 0
    }
};

// DOM Elements Cache
const elements = {
    $discountCode: $('#discount-code'),
    $discountGrid: $('.discount-grid'),
    $discountSuccess: $('.discount-success')
};

// Utility Functions
const utils = {
    validateDimension(type, value, min, max) {
        const $input = $(`#carpet_${type}`);
        if (value > max) {
            $input.val(max);
            alert(`${type.charAt(0).toUpperCase() + type.slice(1)} must be between ${min}cm and ${max}cm`);
            return max;
        }
        if (value < min) {
            $input.val(min);
            alert(`${type.charAt(0).toUpperCase() + type.slice(1)} must be between ${min}cm and ${max}cm`);
            return min;
        }
        return value;
    },

    formatPrice(price) {
        return `R ${Math.ceil(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },

    toggleOverlay(selector, opacity) {
        $(selector).css("opacity", opacity ? "1" : "0");
    }
};

// Main Application Logic
const app = {
    init() {
        this.setupInitialState();
        this.bindEvents();
    },

    setupInitialState() {
        $("#add_to_cart_wrapper").hide();
        $(".note, .renders, .meta-block, .meta-grid-shape, .meta-grid-feel, .meta-grid-pattern, .meta-grid-colour, .meta-grid-edging, .meta-grid-size, .meta-grid-antislip, .invoice-buttons")
            .addClass("hide-this");
        $(".html-anti-slip, .html-buy-button, .shopify-buy__btn").addClass("disabled");
        $("#anti-slip").attr("disabled", true);
        
        $("#carpet_width").val(200);
        $("#carpet_length").val(300);
        $("#carpet_diameter").val(200);

        setTimeout(() => {
            $(".html-buy-button").removeClass("disabled");
            $(".shopify-buy__btn").addClass("disabled");
        }, 2000);
    },

    bindEvents() {
        $('#apply-discount').on('click', this.applyDiscount);
        $('input').on('change', this.handleInputChange);
        $('#add-to-invoice-text, #add-to-invoice').on('click', this.addToInvoice);
        $(document).on('click', '.item-remove', this.removeInvoiceItem);
        $("#download-invoice").on('click', this.generatePDF);
        $(":input[curvy-colour]").on('click', this.handleCurvyColourClick);
        $(":input[data-trim='curvy']").on('click', this.handleCurvyTrimClick);
    },

    applyDiscount() {
        const inputValue = elements.$discountCode.val().toUpperCase();
        const isValidCode = inputValue === 'STYLVOL';
        
        elements.$discountGrid.toggle(!isValidCode);
        elements.$discountSuccess.toggle(isValidCode);
        elements.$discountCode.attr('data-discount', isValidCode);
        
        if (!isValidCode) console.log("Discount code is not valid!");
    },

    handleInputChange() {
        console.clear();
        app.updateDimensions();
        app.updateUI();
        app.calculatePricing();
        app.updateDisplay();
    },

    updateDimensions() {
        state.dimensions.widthCm = utils.validateDimension("width", $("#carpet_width").val(), 80, 400);
        state.dimensions.lengthCm = utils.validateDimension("length", $("#carpet_length").val(), 100, 1000);
        state.dimensions.diameterCm = utils.validateDimension("diameter", $("#carpet_diameter").val(), 100, 400);
    },

    updateUI() {
        // Handle first selections
        const feels = ['soft', 'ultra-soft', 'textured', 'pattern'];
        feels.forEach(feel => {
            if (!state.firstSelections[feel] && $(`#${feel}`).is(":checked")) {
                $(`:input[data-${feel}]`).first().prop("checked", true).siblings()
                    .removeClass("w--redirected-checked").addClass("w--redirected-checked");
                state.firstSelections[feel] = true;
                feels.filter(f => f !== feel).forEach(f => state.firstSelections[f] = false);
            }
        });

        // Update meta details
        $("#meta-width").html(`${state.dimensions.widthCm} cm`);
        $("#meta-length").html(`${state.dimensions.lengthCm} cm`);
        $("#meta-diameter").html(`⌀ ${state.dimensions.diameterCm} cm`);
    },

    calculatePricing() {
        if ($("#curvy").is(":checked")) {
            let total;
            if ($(":input[data-feel='curvy_small']").is(":checked")) {
                $("#meta-shape").html("Curvy Small");
                $("#meta-size").css("display", "flex");
                $("#meta-width").html("120 cm");
                $("#meta-length").html("160 cm");
                total = 2300;
            } else if ($(":input[data-feel='curvy_medium']").is(":checked")) {
                $("#meta-shape").html("Curvy Medium");
                $("#meta-size").css("display", "flex");
                $("#meta-width").html("200 cm");
                $("#meta-length").html("300 cm");
                total = 4800;
            } else if ($(":input[data-feel='curvy_large']").is(":checked")) {
                $("#meta-shape").html("Curvy Large");
                $("#meta-size").css("display", "flex");
                $("#meta-width").html("300 cm");
                $("#meta-length").html("350 cm");
                total = 7900;
            } else if ($(":input[data-feel='curvy_mini_mat_small']").is(":checked")) {
                $("#meta-shape").html("Curvy Mini Mat Small");
                $("#meta-size").css("display", "flex");
                $("#meta-width").html("50 cm");
                $("#meta-length").html("80 cm");
                total = 700;
            } else if ($(":input[data-feel='curvy_mini_mat_large']").is(":checked")) {
                $("#meta-shape").html("Curvy Mini Mat Large");
                $("#meta-size").css("display", "flex");
                $("#meta-width").html("60 cm");
                $("#meta-length").html("100 cm");
                total = 900;
            } else {
                total = 0;
            }
            const shipping = 1;
            $("#total_amount").text(utils.formatPrice(total * PRICES.vat));
            return;
        }

        const widthM = state.dimensions.widthCm / 100;
        const lengthM = state.dimensions.lengthCm / 100;
        const diameterM = state.dimensions.diameterCm / 100;
        
        let priceM2 = 0;
        let pricePerimeter = 0;
        let priceHandling = PRICES.handling.default;
        let areaM2 = 0;

        if ($("#soft").is(":checked")) priceM2 = PRICES.carpet.westminster;
        else if ($("#ultra-soft").is(":checked")) priceM2 = PRICES.carpet.ultraSoft;
        else if ($("#textured").is(":checked")) priceM2 = PRICES.carpet.textured;
        else if ($("#pattern").is(":checked")) priceM2 = PRICES.carpet.pattern;

        if ($("#rectangle").is(":checked")) {
            const perimeterM = (widthM + lengthM) * 2;
            pricePerimeter = perimeterM * ($(":input[data-trim='overlocking']").is(":checked") ? 
                PRICES.trim.overlocking : PRICES.trim.ribbon);
            priceHandling = PRICES.handling.square;
            areaM2 = widthM * (lengthM + 0.2);
        } else if ($("#round").is(":checked")) {
            const perimeterM = 2 * Math.PI * (diameterM / 2);
            pricePerimeter = perimeterM * PRICES.trim.overlockingRound;
            priceHandling = PRICES.handling.round;
            areaM2 = Math.PI * (diameterM / 2) * (diameterM / 2);
        }

        const markupFactor = $("#pattern").is(":checked") ? PRICES.markup.pattern : PRICES.markup.standard;
        const carpetCost = (areaM2 * priceM2) + (areaM2 * priceM2 * markupFactor);
        
        const shipping = widthM <= 1.2 ? 326.09 : 
                         widthM <= 1.6 ? 434.78 : 
                         widthM <= 2 ? 543.48 : 
                         widthM <= 3 ? 652.17 : 
                         817.39;
                         
        const antiSlipTotal = (widthM * lengthM) * (70 / PRICES.vat);
        const total = $("#anti-slip").is(":checked") ? 
            carpetCost + pricePerimeter + antiSlipTotal + priceHandling + shipping :
            carpetCost + pricePerimeter + priceHandling + shipping;

        $("#total_amount").text(utils.formatPrice(total * PRICES.vat));
    },

    updateDisplay() {
        if ($("#rectangle").is(":checked")) {
            $(".feel, .radio-button-field.trim, .trim, .trim-swatches").show();
            $("#meta-size").css("display", "flex");
            $("#meta-diameter").css("display", "none");
        } else if ($("#round").is(":checked")) {
            $(".feel, .radio-button-field.trim").show();
            $("#meta-size").css("display", "none");
            $("#meta-diameter").css("display", "block");
        } else if ($("#curvy").is(":checked")) {
            $(".form-curvy").show();
            $(".form-main").hide();
            $(".renders-main").hide();
            $(".renders-curvy").show();
            $("#curvy-sizes").css("display", "flex");
        } else {
            $(".form-curvy").hide();
            $(".form-main").show();
            $(".renders-main").show();
            $(".renders-curvy").hide();
        }

        const isComplete = (
            ($(":input[data-shape='rectangle'], :input[data-shape='round']").is(":checked") && 
             $(":input[data-feel]").is(":checked") && $(":input[data-colour]").is(":checked") && 
             $(":input[data-trim]").is(":checked")) ||
            ($(":input[data-shape]").is(":checked") && $(":input[data-feel='pattern']").is(":checked") && 
             $(":input[data-pattern]").is(":checked") && $(":input[data-colour]").is(":checked") && 
             $(":input[data-trim]").is(":checked")) ||
            ($(":input[data-shape='curvy']").is(":checked") && $(":input[data-feel-curvy]").is(":checked") && 
             $(":input[curvy-colour]").is(":checked") && $(":input[data-trim='curvy']").is(":checked"))
        );
        
        $("#add_to_cart_wrapper").toggle(isComplete);
    },

    addToInvoice() {
        const item = {
            shape: $("#meta-shape").text(),
            feel: $("#meta-feel").text(),
            colour: $("#meta-colour").text(),
            edging: $("#meta-edging").text(),
            pattern: $("#meta-pattern").text() || "",
            size: $("#round").is(":checked") ? $("#meta-diameter").text() : $("#meta-size").text(),
            total: $("#total_amount").text().substring(2).replace(/,/g, '')
        };

        const description = `Shape: ${item.shape} / Feel: ${item.feel} ${item.pattern} / Colour: ${item.colour} / Edging: ${item.edging} / Size: ${item.size}`;
        const html = `<div class='w-layout-grid pdf-line-item'>
            <div class='item-detail'>${description}</div>
            <div class='item-price' data-price='${item.total}'>R ${item.total.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <span class='price-interger' style='display:none;'>${item.total}</span>
            </div>
            <div class='item-remove'><div class='remove-bar'></div><div class='remove-bar flip'></div></div>
        </div>`;

        $("#pdf-items").append(html);
        $("#form-fields").append(`<input type='hidden' id='${item.total}' name='Line Item' value='${description} / Price: R ${item.total}'>`);
        app.updateInvoiceTotals();
    },

    updateInvoiceTotals() {
        let total = 0;
        $('.price-interger').each(function() {
            total += parseInt($(this).text());
        });

        const vatTotal = Math.ceil(total * 0.15);
        $("#pdf-sub-total").html(`<span>R </span>${total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
        $("#pdf-vat-total").html(`<span>R </span>${vatTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
        $("#pdf-total-due").html(`<span>R </span>${total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
        
        $(".invoice, .get-invoice, .button-wrapper").removeClass("hide");
    },

    removeInvoiceItem() {
        $(this).parent().remove();
        if ($('.pdf-line-item').length === 0) {
            $('.invoice, .get-invoice').addClass('hide');
        } else {
            app.updateInvoiceTotals();
        }
    },

    generatePDF() {
        const details = {
            company: $("#invoiceCompany").val(),
            contact: $("#invoiceName").val(),
            phone: $("#invoicePhone").val(),
            email: $("#invoiceEmail").val(),
            vat: $("#invoiceVat").val(),
            address: $("#invoiceAddress").val()
        };

        const timestamp = Math.round(new Date().getTime() / 1000);
        $("#pdf-number").text(`# ${timestamp}`);
        
        Object.entries(details).forEach(([key, value]) => {
            if (value) $(`#pdf-${key}`).text(value);
            else $(`.pdf-${key}, #pdf-${key}`).remove();
        });

        if (details.contact && details.email) {
            const pdf = new jsPDF();
            pdf.addHTML(
                $("#pdf-invoice").css({ "width": "29.7cm", "height": "42cm" }),
                $('#pdf-invoice')[0],
                () => pdf.save(`yudu-pro-forma-invoice-${timestamp}.pdf`)
            );
        }
        $('#pdf-invoice').css({ 'width': 'auto', 'height': 'auto' });
    },

    handleCurvyColourClick() {
        $(".renders-curvy").removeClass("hide-this");
        $(".renders-closeup").addClass("hide-this");
        $(".note").html(" ");
    },

    handleCurvyTrimClick() {
        $(".renders-curvy").addClass("hide-this");
        $(".renders-closeup").removeClass("hide-this").css("display", "block");
        $(".note").html("Close up");
    }
};

$(() => app.init());