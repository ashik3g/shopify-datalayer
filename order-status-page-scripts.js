<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NS5WPD3G');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NS5WPD3G"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Global site tag (gtag.js) - Google Analytics  -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CNJPL62F9L"></script>
{% if first_time_accessed %}
<script>
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'purchase', // Using 'purchase' as the event name to align with typical GA events
    'email': '{{ email }}',
    'phone': '{{ shipping_address.phone }}',
    'firstName': '{{ shipping_address.first_name }}',
    'lastName': '{{ shipping_address.last_name }}',
    'street': '{{ shipping_address.address1 }}',
    'city': '{{ shipping_address.city }}',
    'region': '{{ shipping_address.province }}',
    'country': '{{ shipping_address.country }}',
    'postalCode': '{{ shipping_address.zip }}',
    'value': {{ total_price | times: 0.01 }},
    'currencyCode': '{{ shop.currency }}', // Optional, as 'currency' is already included
    'orderId': '{{ order.id }}',
    'transaction_id': "{{ order_number }}", // 'transaction_id' could be redundant if 'orderId' serves the same purpose
    'currency': "{{ currency }}",
    'tax': {{ tax_price | times: 0.01 }},
    'shipping': {{ shipping_price | times: 0.01 }},
    'items': [
      {% for line_item in line_items %}{
        'id': "{{ line_item.product_id }}",
        'name': "{{ line_item.title }}",
        'quantity': {{ line_item.quantity }},
        'price': {{ line_item.line_price | times: 0.01 }}
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  });
</script>
{% endif %}
