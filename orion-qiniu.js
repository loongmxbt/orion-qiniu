orion.config.add('Access Key', 'Qiniu')
orion.config.add('Secret Key', 'Qiniu')
orion.config.add('Bucket Name', 'Qiniu')
orion.config.add('Domain Name', 'Qiniu')

if (Meteor.isServer) {
    QN.config = {
        access_key: orion.config.get('Access Key'),
        secret_key: orion.config.get('Secret Key'),
        bucket_name: orion.config.get('Bucket Name'),
        domain_name: orion.config.get('Domain Name')
    };
}

if (Meteor.isClient) {
    orion.filesystem.providerUpload = function(options, success, failure, progress) {
        _.each(options.fileList, function(file) {
            // switch file ext
            // different ext has different path
            console.log("client file: ");
            console.log(file); // client file exists
            var path = "orionjs";

            QN.upload(file, path, function(error, result) {
                if (error) {
                    failure(error);
                } else {
                    success();
                };
            })

        });
    }

    orion.filesystem.providerRemove = function(file, success, failure) {

        Meteor.call("qn_delete", file.key, function(error, result) {
            if (error) {
                failure(new Meteor.Error('qiniu-error', i18n('filesystem.messages.errorRemoving')));
            } else {
                success();
            }
        });

    }
}
