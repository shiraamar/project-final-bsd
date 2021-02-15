using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    class OrderDto
    {
        public int idOrder { get; set; }
        public string tz { get; set; }
        public Nullable<int> idEvent { get; set; }
        public Nullable<System.DateTime> dateOrder { get; set; }
        public Nullable<bool> statusOrder { get; set; }
        public string nameEvent { get; set; }
        public Nullable<int> amount { get; set; }

        public OrderDto(Dal.Order o)
        {
            this.idOrder = o.idOrder;
            this.tz = o.tz;
            this.idEvent = o.idEvent;
            this.dateOrder = o.dateOrder;
            this.statusOrder = o.statusOrder;
            this.nameEvent = o.nameEvent;
            this.amount = o.amount;

        }
        public static Dal.Order Todal(OrderDto o)
        {
            return new Dal.Order
            {
            idOrder = o.idOrder,
             tz = o.tz,
            idEvent = o.idEvent,
            dateOrder = o.dateOrder,
            statusOrder = o.statusOrder,
            nameEvent = o.nameEvent,
            amount = o.amount,
        };
        }
    }
}
