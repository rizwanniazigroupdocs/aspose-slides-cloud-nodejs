/**
 * Aspose.Slides for Cloud API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

var assert = require('assert');
import * as model from "../sdk/model";
import { PostSlidesPipelineRequest, DocumentApi } from "../sdk/api";

describe("Additional tests for pipeline", () => {
    it("multiple files upload", () => {
        const config = require("../testConfig.json");
        const fs = require('fs');
        const api = new DocumentApi(config.AppSid, config.AppKey, config.BaseUrl, config.debug);
        const request = new PostSlidesPipelineRequest();
        const file1 : model.RequestInputFile = { type: model.InputFileType.Request, index: 0 };
        const file2 : model.RequestInputFile = { type: model.InputFileType.Request, index: 1 };
        const task : model.Save = {
            format: model.ExportFormat.Pptx,
            output: { type: model.OutputFileType.Response },
            type: model.TaskType.Save
        };
        request.pipeline = { input: { templateData: file1, template: file2 }, tasks: [ task ] };
        request.files = [
            fs.createReadStream("TestData/TemplatingCVDataWithBase64.xml"),
            fs.createReadStream("TestData/TemplateCV.pptx")
        ];
        
        return api.postSlidesPipeline(request).then((result) => {
            assert.equal(200, result.response.statusCode);
        });
    });
});
