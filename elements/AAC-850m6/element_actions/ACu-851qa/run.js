function(instance, properties, context) {

    var blob = new Blob([properties.text_value], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `${properties.file_name_without_extension}.${properties.file_extension}`);

}
