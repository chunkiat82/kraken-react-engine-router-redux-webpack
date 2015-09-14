"use strict";

module.exports = {
  "decisions": [
    {
      "decision_code": "{{decisionCode}}",
      "decisions_info": [{
            "attributes": [{
                "attribute": "NUM_RETRIES",
                "value": "{{retryCount}}"
            },
            {
              "attribute": "VERIFICATION_STATUS",
              "value": "{{verificationStatus}}"
            }]
      }],
      "data_elements": [
        {
          "entity_id": "1862582706408851192",
          "entity_type": "PARTY",
          "name": "PERSON",
          "status": "NOT_AVAILABLE",
          "data_elements": [
            {
              "entity_id": "1862582706408851192",
              "entity_type": "PARTY",
              "name": "CORE_PROPERTIES",
              "status": "NOT_AVAILABLE",
              "data_elements": 
                "{{coreProperties}}"
                 
            },
          ],
          "data_elements_constraint": "ALL_OF",
          "data_element_types": [
            "INPUT_VALUE"
          ]
        }
      ],
      "suggested_actions": [
        {
          "action_details": [
            {
              "uri": "/v1/compliance/criteria-decisions/{ENCRYPT(1262623859243168818 - PAYPAL_PARTY_INDIVIDUAL - 1055)}/arbitrate"
            }
          ]
        }
      ]
    }
  ]
}