
# Blik Experience Context Base

## Structure

`BlikExperienceContextBase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `consumerIp` | `string \| undefined` | Optional | The IP address of the consumer. It could be either IPv4 or IPv6.<br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `39`, *Pattern*: `^(([0-9]\|[1-9][0-9]\|1[0-9]{2}\|2[0-4][0-9]\|25[0-5])\.){3}([0-9]\|[1-9][0-9]\|1[0-9]{2}\|2[0-4][0-9]\|25[0-5])$\|^(([a-zA-Z]\|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]\|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$\|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}\|:))\|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}\|((25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)(\.(25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)){3})\|:))\|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})\|:((25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)(\.(25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)){3})\|:))\|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})\|((:[0-9A-Fa-f]{1,4})?:((25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)(\.(25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)){3}))\|:))\|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})\|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)(\.(25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)){3}))\|:))\|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})\|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)(\.(25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)){3}))\|:))\|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})\|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)(\.(25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)){3}))\|:))\|(:(((:[0-9A-Fa-f]{1,4}){1,7})\|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)(\.(25[0-5]\|2[0-4]\d\|1\d\d\|[1-9]?\d)){3}))\|:)))(%.+)?\s*$` |
| `consumerUserAgent` | `string \| undefined` | Optional | The payer's User Agent. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0).<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256`, *Pattern*: `^.*$` |

## Example (as JSON)

```json
{
  "consumer_ip": "consumer_ip0",
  "consumer_user_agent": "consumer_user_agent2"
}
```

