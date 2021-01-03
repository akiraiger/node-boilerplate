// OBJECT DEFINITIONS

// API DEFINITIONS

/**
 * @swagger
 *
 * tags:
 *  - name: "health"
 *    description: "Operations related to service health"
 */

/**
 * @swagger
 *
 * /health:
 *   get:
 *     tags:
 *       - "health"
 *     description: Show the current service status of the API
 *     responses:
 *       200:
 *         description: Healthy
 *       500:
 *         description: Problem Detected
 */
