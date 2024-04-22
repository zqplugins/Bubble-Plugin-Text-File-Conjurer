function(instance, properties, context) {
    
    let base64;
if (typeof Base64 === "undefined" || typeof Base64.encode !== "function") {
    // Fallback to using btoa() for Base64 encoding if Base64.encode is not available
    base64 = btoa(unescape(encodeURIComponent(properties.contents)));
} else {
    // Use the custom Base64.encode method if it's defined
    base64 = Base64.encode(properties.contents);
}
    
    
    context.uploadContent(properties.filename + '.' + properties.file_extension, base64, function(err, url){
        if(err) alert('Whe have a problem when uploading...');
        else {
            instance.publishState('url', url);
            instance.triggerEvent('save');
        }
    }, properties.attachToThing);
}